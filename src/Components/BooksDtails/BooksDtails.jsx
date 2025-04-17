import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { setBooksId } from "../../Utilitis/bookIdSetLocalStorage";
import {     toast } from 'react-toastify';



const BooksDtails = () => {
    const { userId } = useParams()
    const id = parseInt(userId)

    const datas = useLoaderData()

    //find 
    const user = datas.find(data => data.bookId === id)

    const { author, bookName, image, review, category, tags, totalPages, rating, publisher, yearOfPublishing } = user


    //click read list 
    const hendlerReadBooks = (id) => {
        setBooksId(id)

        // neact toastify
        toast('all ready its added');
    };

    return (
        <div className="flex items-center justify-center gap-8 m-30">
            <div className="w-[50%]">
                <img className=" w-full object-cover h-[594px] rounded-2xl" src={image} alt="" />
            </div>
            <div className="w-[50%] ">
                <h1 className="text-2xl font-bold my-2">{bookName}</h1>
                <p className="my-2">{author}</p>
                <p>{category}</p>
                <hr className="my-2" />
                <p className="text-justify"> <span className="font-bold ">Review :</span> {review}</p>
                <div className="flex items-center gap-4">
                    <p className="mr-2">Tags</p>
                    {
                        tags.map((tag, index) => <NavLink key={index}> <button className=" text-green-600 my-2 "> #{tag} </button> </NavLink>)
                    }
                </div>
                <hr className="my-2" />
                <p>Number of Pages: {totalPages}</p>
                <p>Publisher: {publisher}</p>
                <p>Year of Publishing: {yearOfPublishing}</p>
                <p>Rating {rating}</p>
                <div className="flex gap-4 my-3">
                    <NavLink> <button onClick={() => hendlerReadBooks(id)} className='btn border border-green-600'>Read This</button> </NavLink>

                    <NavLink><button className='btn border border-green-600'>Wishlist Dream</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default BooksDtails;