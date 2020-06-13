import * as axios from "axios";


const instance=axios.create(
    {
        withCredentials:true,
        baseURL:`https://social-network.samuraijs.com/api/1.0/`,
        headers:{"API-KEY":"0e5317f8-1eba-40e8-9b59-8d5e29cf9296"}
    }
);

export  const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data;
            });
    }
}



