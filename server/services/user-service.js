const UserModel = require('..//models/user-model.js')
const mailService = require('./mail-service.js')
const tokenService = require('./token-service.js')
const UserDto = require('../dtos/user-dto.js')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const config = require('config')

class UserService {
    async createUserToken(user) {
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }

    async registration(name, phone, email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error('User already exists')
        }
        const activationLink = uuid.v4()
        const hashPassword = await bcrypt.hash(password, 3)

        const user = await UserModel.create({name, phone, email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${config.get('API_URL')}/auth/activate/${activationLink}`)
        return this.createUserToken(user)
    }

    async activate(activation) {
        const user = await UserModel.findOne({activation})
        if (!user) {
            throw new Error('Invalid activation link')
        }

        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            //TODO Remove hint
            throw new Error('Invalid email or password (EMAIL)')
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            //TODO Remove hint
            throw new Error('Invalid email or password (PASS)')
        }

        return this.createUserToken(user)
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new Error('Missing refresh token (UnauthorizedError)')
        }
        const tokenData = await tokenService.validateRefreshToken(refreshToken)
        if (!tokenData) {
            throw new Error('Missing refresh token (UnauthorizedError)')
        }
        const user = await UserModel.findById(tokenData.id)
        return this.createUserToken(user)
    }
}

module.exports = new UserService()