// set books from localstorage 
const getBooksId = () => {
    const getBooksId = localStorage.getItem('books-list');
    if(getBooksId){
        const makeParse = JSON.parse(getBooksId);
        return makeParse;
    }
    else{
        return [] ;
    }
};

//set books id from localStorage 
const setBooksId = (id) => {
    const exitingBooksId = getBooksId()
    if(exitingBooksId.includes(id)){
        console.log('already its ading')
    }
    else{
        exitingBooksId.push(id)
        const makeStringBooksId = JSON.stringify(exitingBooksId);
        localStorage.setItem('books-list', makeStringBooksId)
    }
};

export {setBooksId , getBooksId}