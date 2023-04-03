import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt'
import { AuthType } from './dto/auth.type';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../schemas/users.schema';

@Injectable()
export class AuthService {
    saltOrRounds = 10
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService) { }
    async validateUser(email: string, pass: string): Promise<AuthType> {
        const user = await this.usersService.findUserByEmail(email)
        if (user) {
            const isMatch = await bcrypt.compare(pass, user?.password)

            if (isMatch) {
                const token = await this.tokenService(user)

                return {
                    user: {
                        _id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                    },
                    token: token
                }
            }
        }

        throw new UnauthorizedException()
    }

    private async tokenService(user: Users) {
        return this.jwtService.sign({ username: user.name, sub: user._id.toString() })
    }

    async validateToken(token: string) {
        const jwt = this.jwtService.verify(token)
        if (!jwt.sub) throw new UnauthorizedException()
        return {
            user:
            {
                _id: jwt.sub,
                name: jwt.username,
            },
            token: token

        }
    }
}
