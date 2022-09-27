const Book = require("../model/book");

const getAllBooks = async (req, res) => {
    try {const books = await Book.find()
    return res.status(200).json({books})
} catch (error) {
    return res.status(500).send(error.message);
}
}

const createBook = async(req, res) => {
    // let book;
    // const {name,author,description,price,available}= req.body;
    // try{
    //     book = new Book({
    //         name,
    //         author,
    //         description,
    //         price,
    //         available
    //     });
    //     await book.save()
    // } catch(err){
    //     console.log(err)
    // }

    // if(!book) {
    //     return res.status(500).json({message:"unable to add"})
    // }
    // return res.status(201).json({ book });
    try{
        const book = await new Book(req.body)
        await book.save()
        return res.status(201).json({
            book,
        })

    } catch(error) {
        return res.status(500).json({error:error.message})
    }
  
}

const getById= async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        if (book) {
            return res.status(200).json({ book });
        }
        return res.status(400).send('Book with the specified ID does not exist')

    } catch(error) {

    }
}

const updateBook = (req, res) => {
    try{
        const {id} = req.params;
        Book.findByIdAndUpdate(id, req.body, {new: true}, (err, book) => {
            if (err){
                res.status(500).send(err)
            }
            if (!book){
                res.status(500).send('Book not found')
            }
            return res.status(200).json(book);
        })

    } catch(error){
        return res.status(500).send(error.message);
    }
}


const deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Book.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("Book deleted");

        }
        throw new Error("Book not found");
    } catch (error) {
        return res.status(500).send(error.message)
    }
}





module.exports = {
    getAllBooks,
    createBook,
    getById,
    updateBook,
    deleteBook
}