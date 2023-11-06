const connection = require('../database/db')
const bcrypt = require('bcrypt')
const uuid= require('uuid')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/userDto')
const ApiError = require('../exceptions/apiError')

class UserService {
    async registration(email, password) {
        const connect = await connection
        const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
        if(rows[0]) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`)
        }else{

            const hashPassword = await bcrypt.hash(password, 3)
            await connect.execute("INSERT INTO `users`(`email`, `password`) VALUES(?,?)", [email, hashPassword])
            const user = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
    
            const userDto = new UserDto(user[0][0]) // id, email, isActivated
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken)
    
            return {...tokens, user: userDto}
        }
    }

    async login(email, password) {
        const connect = await connection
        const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `email` = ?', [email]);
        if(!rows[0]) {
            throw ApiError.BadRequest(`Пользователь с почтой ${email} не найден`)
        }
        const isPassEquals = await bcrypt.compare(password, rows[0].password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(rows[0][0])
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)

        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const connect = await connection
        const user = await connect.execute('SELECT * FROM `users` WHERE `id` = ?', [tokenFromDb[0].user]); // user

        const userDto = new UserDto(user[0][0])
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const connect = await connection

        const users = await connect.execute('SELECT * FROM `users`')
        return users[0]
    } 
}

module.exports = new UserService()