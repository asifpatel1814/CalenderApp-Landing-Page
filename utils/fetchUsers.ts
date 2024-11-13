import {User} from "../typing"

export const fetchUsers = async ()=>{
    const res = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json", {
        headers:{
            Accept: "application/json"
        }
    })

    const data = await res.json();
    const users : User[] = data as User[];

    return users;
}