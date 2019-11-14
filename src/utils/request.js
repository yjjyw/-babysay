import axios from 'axios';
let request=axios.create({
  baseURL:process.NODE_ENV==='production'?'':'/api',
  timeout:2000
});
         //拦截
request.interceptors.request.use(function(config){
    config.headers={

    };
     return config;//配置错误
});

request.interceptors.response.use(function(res){
    return res.data;
},function(error){
    switch(error.status){
        case '401':
            break;
        case '422':
            break;
        case '502':
            break;
    }
});

let get =request.get;
let post=request.post;

export{
    get,
    post
}