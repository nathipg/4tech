import { Injectable } from "@nestjs/common";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

// NUNCA DEVE SER EXPOSTA PUBLICAMENTE
//
// Só está clara para teste, em produção deve estar protegida de forma
// apropriada
export const secretKey = 'wingardium leviosa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secretKey
        });
    }

    async validate(payload: any) {
        return { userLogin: payload.userLogin };
    }

}