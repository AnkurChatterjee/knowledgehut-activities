let arr = [];

let store = (user) => {
    let userId = arr.length + 1;
    user.id = userId;
    arr.push(user);
    return `User with Id: ${userId} is stored`;
}
let fetch = (userId,pwd) => {
    let flag = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i].id == userId && arr[i].password == pwd){
            flag = true;
            return arr[i];
        }
    }
    if(flag==false)
        return {message: `Sorry, userId or password is incorrect`};
}
let update = (obj) => {
    let flag = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i].id == obj.id){
            flag = true;
            arr[i].password = obj.password;
            return arr[i];
        }
    }
    if(flag == false){
        return {message: `Id not found`};
    }
}
let remove = (userId) => {
    let flag = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i].id == userId){
            flag = true;
            arr.splice(i,1);
            return {message: `Details of user with Id: ${userId} is deleted`};
        }
    }
    if(flag == false)
        return {message: `Id not found. Nothing is deleted`};
}

module.exports = {store,fetch,update,remove};