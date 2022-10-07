import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findUserByEmail(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Get('/all')
  findAllUsers() {
    return this.userService.findAll();
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
