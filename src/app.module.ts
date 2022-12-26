import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoCodeUserModule } from './no-code-user/no-code-user.module';
import { ProjectModule } from './project/project.module';
//https://makinhs.medium.com/graphql-nodejs-postgres-made-easy-with-nestjs-and-typeorm-4daff3c516d
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      debug: true,
      playground: true,
      
    }),
  ],
})
export class AppModule {}
