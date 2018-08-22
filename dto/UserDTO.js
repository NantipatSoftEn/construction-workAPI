
class UserDTO {
    constructor(user){
        this.username = user.username;
        this.passwordHash = user.passwordHash;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;
    }

    toObject() {
        return {
            username: this.username,
            createdAt: this.created_at,
            updatedAt: this.updated_at
        }
    }
}

module.exports = UserDTO;