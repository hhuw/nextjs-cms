import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthListModel } from './models/auth-list.model';
import { AuthQueryModel } from './models/auth-query.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // 验证用户有效性，这个在local策略里用到
  async validateUser(filter: AuthQueryModel) {
    const account = filter.account;
    //TODO加密
    const decode = filter.passWord;
    if (!account || !decode) {
      throw new BadRequestException('user is required!');
    }
    // 去数据库查找该user
    const employee = await this.getBasicInfo(filter.account);
    if (!employee) {
      throw new BadRequestException('用户未找到');
    }
    const isValidPwd = decode == employee.passWord;
    if (!isValidPwd) {
      throw new BadRequestException('密码错误!');
    }
    if (!employee && isValidPwd == null) {
      throw new BadRequestException('账号密码不能为空!');
    }
    const { passWord, ...result } = employee;
    return result;
  }

  // 登录接口服务层
  async login(filter: AuthListModel) {
    const payload = { account: filter.account, id: filter.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getBasicInfo(account: string) {
    const result = await this.userRepository.findOne({
      where: { account },
    });
    if (!result) return void 0;
    return result;
  }
}
