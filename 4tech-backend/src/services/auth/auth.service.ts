import { Injectable, BadRequestException } from '@nestjs/common';
import { LoginViewModel } from 'src/domain/login.viewmodel';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService) {
    }

    login(login: LoginViewModel) {
        const user = this.userService.attemptLogin(login);

        if(!user) {
            throw new BadRequestException('Incorrect Credentials');
        }

        return {
            access_token: this.jwtService.sign({status: 'Authorized'})
        };
    }

}
