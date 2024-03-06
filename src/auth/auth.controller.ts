import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { jwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    console.log('Inside AuthController Login Method');
    console.log(req.user);
  }

  @Get('status')
  @UseGuards(jwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status Method');
    console.log(req.user);
    return req.user;
  }
}
