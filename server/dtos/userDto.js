module.exports = class UserDto {
    email
    id
    fio
    phoneNumber

    constructor(model) {
        this.email = model.email
        this.id = model.id
        this.fio = model.fio
        this.phoneNumber = model.phoneNumber
    }
}