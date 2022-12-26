import {
    Args,
    Mutation,
    Resolver
  } from '@nestjs/graphql';
  import { NoCodeUser } from './models/noCodeUser.model';
  import { NoCodeUsersService } from './no-code-user.service';
  import {CreateUserNoCodeInput} from './dto/createUserNoCodeDb'
  
  @Resolver((of) => NoCodeUser)
  export class NoCodeUsersResolver {
    constructor(private noCodeUsersService: NoCodeUsersService) {}
  

    @Mutation(() => NoCodeUser)
    createUserNoCodeDb(@Args('createUserNoCodeInput') createUserNoCodeInput: CreateUserNoCodeInput) {
        return  this.noCodeUsersService.createNoCodeDbUser(createUserNoCodeInput)
    }
  
  }