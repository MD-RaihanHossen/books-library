import bannerImg from   '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="h-[554px]  sm:p-4">
            <div className='flex flex-col md:flex-row justify-center md:justify-between gap-10 items-center'>
                <div className="">
                    <h1 className=' text-2xl md:text-5xl font-extrabold mb-10'>Books to freshen up  <br /> your bookshelf</h1>
                    <button className="bg-green-600  rounded font-bold btn p-4 ">View The List</button>
                </div>
                <div>
                    <img src={bannerImg} className='rounded-2xl md:w-full object-fill' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;