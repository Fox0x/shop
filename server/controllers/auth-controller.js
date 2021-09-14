const userService = require('../services/user-service.js')
const config = require('config')

class AuthController {
    async registration(req, res) {
        try {
            const {name, phone, email, password} = req.body
            const userData = await userService.registration(name, phone, email, password)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 30,
                httpOnly: true,
                sameSite: "lax"
            }) //TODO Add secure:true to options if https
            return res.json(userData);
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 30,
                httpOnly: true,
                sameSite: "lax"
            }) //TODO Add secure:true to options if https
            return res.json(userData);
        } catch (e) {
            console.log(e)
        }
    }

    async logout(req, res) {
        try {
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            console.log(e)
        }
    }

    async activate(req, res) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(config.get('CLIENT_URL'))
        } catch (e) {
            console.log(e)
        }
    }

    async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true}) //TODO Add secure:true to options if https
            return res.json(userData);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AuthController();