import { useEffect, useState } from "react";
import axios from "axios";

const Users = ()=>{

    const [users , setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    } , [])

    if(users.lenght){
        return(
            <>
                <h1>alaki</h1>  
            </>
        )
    }else{
        return(
            <div className="container text-center mt-5">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
export default Users;