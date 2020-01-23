import { Injectable } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { UserLoginViewModel } from 'src/domain/userlogin.viewmodel';

@Injectable()
export class UserRepository {

    db: UserViewModel[] = [];

    getUsers() {
        return this.db;
    }

    createUser(newUser: UserViewModel) {
        this.db.push(newUser);
        return 'User successfully added';
    }

    updateUser(user: UserViewModel) {
        const userIndex = this.db.findIndex(x => x.userLogin === user.userLogin);
        this.db[userIndex] = user;
        return 'User successfully updated';
    }

    deleteUser(user: UserLoginViewModel) {
        this.db.splice( this.db.findIndex(x => x.userLogin === user.userLogin), 1 );
        return 'User successfully removed';
    }

}
