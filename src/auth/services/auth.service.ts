import { UserService } from '@/user';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dtos';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService, private jwtService: JwtService, private userService: UserService) {}

  login(loginDto: LoginDto): { token: string; refreshToken: string } {
    const user = this.userService.login(loginDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION'),
    });

    return { token, refreshToken };
  }
}
