import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [],
})
export class UsersModule {}
