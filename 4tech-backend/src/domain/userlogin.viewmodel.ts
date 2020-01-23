import { IsNotEmpty, Length } from 'class-validator';

export class UserLoginViewModel {

    @IsNotEmpty()
    @Length(3, 10)
    readonly userLogin: string;

}