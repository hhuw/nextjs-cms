import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // 重写validate方法
  async validate(account: string, passWord: string) {
    // 调用在服务层验证的方法
    const employee = await this.authService.validateUser({ account, passWord });
    if (!employee) {
      throw new UnauthorizedException();
    }
    return employee;
  }
}
