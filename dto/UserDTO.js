
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
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }
}

module.exports = UserDTO;