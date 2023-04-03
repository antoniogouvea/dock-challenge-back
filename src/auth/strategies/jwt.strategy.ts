import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { UsersService } from '../../users/users.service'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService, private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY,
        })
    }

    /**
     * This function can be used to validate other things inside the accessToken
     * @param payload
     * @returns
     */
    async validate(payload: { sub: string, name: string }) {
        const user = await this.usersService.findUserById(payload.sub)

        if (!user) throw new UnauthorizedException()

        return user
    }

}
