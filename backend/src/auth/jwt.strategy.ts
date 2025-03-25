import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';  
import { UsersService } from '../users/users.service'; 
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private usersService: UsersService, 
  ) {
    const jwtSecret = process.env.JWT_SECRET;
    
    if (!jwtSecret) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret, 
    });
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload);
    console.log(process.env.JWT_SECRET)
    
    const user = await this.usersService.findOne(payload.sub);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    
    return { userId: payload.sub, email: payload.email };
  }
}
