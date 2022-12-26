import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NoCodeUser} from './models/noCodeUser.model'
import {NoCodeUsersService} from './no-code-user.service'
import {NoCodeUsersResolver} from './no-code-user.resolver'

@Module({
    providers : [NoCodeUsersService,NoCodeUsersResolver],
    imports: [TypeOrmModule.forFeature([NoCodeUser])],
})
export class NoCodeUserModule {
}
