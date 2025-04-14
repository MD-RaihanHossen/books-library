import { useEffect, useState } from "react";
import User from "../user/user";


const Users = () => {

    // diposite data from local data bech
    const [users, setUsers] = useState()

  

    useEffect(() =>{
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])


    return (
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-5  lg:gap-20  sm:flex sm:flex-col items-center">

            {
                users?.map(user => <User user={user}  key={user.bookId}></User>)
            }
        </div>
    );
};

export default Users;