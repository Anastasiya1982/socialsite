
 export const requiredField=(value)=>{
    if (value) {
        return undefined
    }else{
        return "field is required";
    }
    }





export const maxLengthCreator =(maxLength) => (value)=>{
    if (value.length>maxLength){
        return `Max length is ${maxLength} sumbols`;
    }else{
        return undefined;
    }
}


 // export const maxLength30 = value=>{
 //     if (value.length>30){
 //         return "Max length is 30 sumbols";
 //     }else{
 //         return undefined;
 //     }
 // }