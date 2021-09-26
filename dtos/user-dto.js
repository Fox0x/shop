module.exports = class UserDto {
    id;
    name;
    phone;
    email;
    isActivated;

    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.phone = model.phone;
        this.email = model.email;
        this.isActivated = model.isActivated;
    }


}