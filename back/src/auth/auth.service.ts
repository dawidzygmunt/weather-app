import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
  constructor(private configService: ConfigService) {}
  login({ data }: { data: { login: string; password: string } }) {
    const envLogin = this.configService.get('LOGIN');
    const envPassword = this.configService.get('PASSWORD');

    if (!data.login || !data.password) {
      return { error: 'Please provide login and password' };
    }

    if (data.login === envLogin && data.password === envPassword) {
      return { success: 'You are logged in' };
    }
    return { error: 'Invalid login or password' };
  }
}
