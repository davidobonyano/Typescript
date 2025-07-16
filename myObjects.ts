type user = {
    name: string;
    email: string;
    isActive: boolean;
    creditdetails?: number
}

function createUser(): user{
    return({name:"", email: "", isActive: false})
}

let
 Myuser: user = {
    name:"dave",
    email: "h@H.com",
    isActive: false
}
Myuser.email = "h@gmail.com"