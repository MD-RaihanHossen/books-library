 import { FcRating } from "react-icons/fc";
 import { Link, NavLink } from "react-router-dom";

const User = ({user}) => {
    const {bookName, author, image, rating, category, tags , bookId } = user
    const [tag1, tag2] = tags


    return (
        <Link to={`/user/${bookId}`}>
         <div className=" border border-gray-400 shadow flex justify-center items-center w-[374px] h-[482px] mx-auto mb-20 rounded-2xl ">
            <div>
            <div className="w-[326px] h-[230px] flex justify-center items-center bg-gray-200 rounded-2xl">
                <img className="w-[131px] h-[156px] object-cover" src={image} alt="" />
            </div>
            <div className="w-[326px] mt-10">

                <div className="flex justify-around mb-2.5">
                    <NavLink><button className='btn border border-green-600'>{tag1}</button></NavLink>
                    <NavLink><button className='btn border border-green-600'>{tag2}</button></NavLink>
                </div>

                <h1 className="text-2xl font-bold mb-2">{bookName}</h1>
                <h2>By : {author}</h2>
                <div className="flex justify-between text-2xl mt-5">
                    <p>{category}</p>
                    <div className="flex gap-3 justify-center items-center">
                        <p>{rating}</p>
                        <p><FcRating /></p>
                    </div>
                </div>
            </div>
            </div>
        </div></Link>
    );
};

export default User;