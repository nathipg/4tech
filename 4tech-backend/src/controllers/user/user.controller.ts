import { Controller, Get, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { UserLoginViewModel } from 'src/domain/userlogin.viewmodel';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() newUser: UserViewModel) {
        return this.userService.createUser(newUser);
    }

    @Post('list')
    createUsers(@Body() newUsers: UserViewModel[]) {
        return this.userService.createUsers(newUsers);
    }

    @Put()
    updateUser(@Body() user: UserViewModel) {
        return this.userService.updateUser(user);
    }

    @Delete()
    deleteUser(@Body() user: UserLoginViewModel) {
        return this.userService.deleteUser(user);
    }

}