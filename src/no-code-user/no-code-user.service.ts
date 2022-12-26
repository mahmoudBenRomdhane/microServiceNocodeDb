import { Injectable } from '@nestjs/common';
import { NoCodeUser } from './models/noCodeUser.model';
import { CreateUserNoCodeInput } from './dto/createUserNoCodeDb';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const axios = require('axios')

@Injectable()
export class NoCodeUsersService {
  constructor(
    @InjectRepository(NoCodeUser)
    private readonly userRepository: Repository<NoCodeUser>,
  ) {}


  async createNoCodeDbUser (createUserNoCodeInput:CreateUserNoCodeInput) : Promise<any> {
    const dataTo = {
      email :createUserNoCodeInput.email,
      password : createUserNoCodeInput.password,
    }
    const noCodeUser = this.userRepository.create(dataTo)
    const data = JSON.stringify({
      "email": createUserNoCodeInput.email,
      "password": createUserNoCodeInput.password,
      "token": "",
      "ignore_subscribe": true
    });
    const config = {
      method: 'post',
      url: 'http://145.239.168.115:8080/api/v1/auth/user/signup',
      headers: { 
        'Content-Type': 'application/json', 
        'Cookie': 'refresh_token=ca545cde5313a5f1b4b71f3143107d9faee2adbfb776e9cebce87e86b25dcd4510b1673ad24fe875'
      },
      data : data
    };
    axios(config)
    .then( function (response : any) {
        console.log("taada")
    })
    return await this.userRepository.save(noCodeUser)
    .catch(function (error) {
      return error
    });
  }

}
