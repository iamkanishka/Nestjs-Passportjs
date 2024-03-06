import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from 'src/auth/dto/auth.dto';

const fakeUsers = [
  {
    id: 1,
    username: 'Kanishka',
    password: 'Kanishka@123',
  },
  {
    id: 2,
    username: 'Atomlessmind',
    password: 'Atomlessmind@123',
  },
];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  validataUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => {
      return user.username === username;
    });
    if (!findUser) return null;
    if (findUser.password === password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
