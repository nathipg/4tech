import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository/user-repository';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { LoginViewModel } from 'src/domain/login.viewmodel';

@Injectable()
export class UserService {

    constructor(readonly userRepository: UserRepository) {

    }

    getUsers() {
        return this.userRepository.getUsers();
    }

    createUser(newUser: UserViewModel) {
        const userList = this.userRepository.getUsers();
        const existingUser = userList.find(x => x.userLogin === newUser.userLogin);

        if(existingUser) {
            throw new BadRequestException('This username already exists!');
        }

        return this.userRepository.createUser(newUser);
    }

    createUsers(newUsers: UserViewModel[]) {
        return newUsers.map(newUser => this.createUser(newUser));
    }

    updateUser(user: UserViewModel) {
        const userList = this.userRepository.getUsers();
        const existingUser = userList.find(x => x.userLogin === user.userLogin);

        if(!existingUser) {
            throw new BadRequestException('This user doesn\'t exists!');
        }

        return this.userRepository.updateUser(user);
    }

    deleteUser(user: UserViewModel) {
        const userList = this.userRepository.getUsers();
        const existingUser = userList.find(x => x.userLogin === user.userLogin);

        if(!existingUser) {
            throw new BadRequestException('This user doesn\'t exists!');
        }

        return this.userRepository.deleteUser(user);
    }

    attemptLogin(login: LoginViewModel) {
        const userList = this.userRepository.getUsers();

        const foundLogin = userList
            .find(x =>
                x.userLogin === login.userLogin &&
                x.password === login.password
            );

        return foundLogin;
    }

}