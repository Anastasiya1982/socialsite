import * as axios from "axios";


const instance=axios.create(
    {
        withCredentials:true,
        baseURL:`https://social-network.samuraijs.com/api/1.0/`,
        headers:{"API-KEY":"0e5317f8-1eba-40e8-9b59-8d5e29cf9296"}
    }
);

export  const securityAPI= {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

export  const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data;
            });
    },
    unfollowUsers(userId){
        return  instance.delete(`follow/${userId}`)
            .then(response=> {
                return response.data;
            });
    },
    followUsers(userId){
        return  instance.post(`follow/${userId}`)
            .then(response=> {
                return response.data;
            });
    },
    getProfile(userId){
        console.warn("Obsolete method.Please profileAPI object.")
        return profileAPI.getProfile(userId);

    }

}


export  const profileAPI= {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status});
    },
    savePhoto(photoFile){
        let formDate= new FormData();
        formDate.append("image",photoFile)
        return instance.put(`profile/photo` ,formDate,{
            headers:{'Content-Type':'multipart/form-data'}
        });
    },
    saveProfile(profile){
        return instance.put(`profile`,profile);
    }
}

export  const authAPI={
    authMe(){
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe=false,captcha=null){
        return instance.post(`auth/login`,{email,password,rememberMe,captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

