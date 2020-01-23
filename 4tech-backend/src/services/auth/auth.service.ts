import { Injectable, BadRequestException } from '@nestjs/common';
import { LoginViewModel } from 'src/domain/login.viewmodel';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) {
    }

    login(login: LoginViewModel) {
        const user = this.userService.attemptLogin(login);

        if(!user) {
            throw new BadRequestException('User login or user password are incorrect');
        }

        return 'Authenticated';
    }

}
