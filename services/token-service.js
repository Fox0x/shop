const jwt = require('jsonwebtoken')
const config = require('config')
const tokenModel = require('../models/token-model.js')

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, config.get('JWT_ACCESS_SECRET'), {expiresIn: config.get('JWT_ACCESS_LIFETIME')})
        const refreshToken = jwt.sign(payload, config.get('JWT_REFRESH_SECRET'), {expiresIn: config.get('JWT_REFRESH_LIFETIME')})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const isAccessTokenValid = jwt.verify(token, config.get('JWT_ACCESS_SECRET'))
            return isAccessTokenValid
        } catch (e) {
            return null;
        }
    }

    async validateRefreshToken(token) {
        try {
            const isRefreshTokenValid = jwt.verify(token, config.get('JWT_REFRESH_SECRET'))
            const isRefreshTokenKnown = await tokenModel.findOne({token})
            return (isRefreshTokenValid && isRefreshTokenKnown) ? isRefreshTokenValid : null;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const token = await tokenModel.deleteOne({refreshToken})
        localStorage.removeItem('token')
        return token
    }
}

module.exports = new TokenService();