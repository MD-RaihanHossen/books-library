import { useEffect } from "react";
import { getBooksId } from "../../Utilitis/bookIdSetLocalStorage";
import { useState } from "react";
import User from "../user/user";


const LIstedBooks = ({datas}) => {
    console.log(datas)

    const [books, setBooks] = useState([])

    useEffect(()=>{
        const getLocal = getBooksId()
        //conver to parseInt number
        const getId = getLocal.map(id => id)
        console.log(getId)

        const getSameBooks = datas.filter( async (data) => {
            console.log(data)
            await getId.includes(data.bookId)
        })
        setBooks(getSameBooks)
        
        
    },[])
    console.log(books)


    return (
        <div className="flex gap-10 m-10">
           {
            books.map((user, idx) => <User user={user} key={idx}></User>)
           }
        </div>
    );
};

export default LIstedBooks;