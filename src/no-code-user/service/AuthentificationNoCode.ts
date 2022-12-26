const axios = require('axios');

const Token = () =>{
let data = JSON.stringify({
  "email": "mahmoudben@gmail.com",
  "password": "pino1905"
});

let config = {
  method: 'post',
  url: 'http://145.239.168.115:8080/api/v1/auth/user/signin',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'refresh_token=7c6e9601521de665acfd5acd2900739b457644319bc9d712e14a1636dcdf5a7c98ddfc5ea9b2519c'
  },
  data : data
};

axios(config)
.then((response) => {
  return response.data.token
})
.catch((error) => {
  return -1 ;
});

}