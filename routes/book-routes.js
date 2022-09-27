const { Router } = require('express');
const router = Router();
const Book = require("../model/book")
const booksController = require("../controllers/book-controllers")

router.get("/", booksController.getAllBooks);
router.post("/",booksController.createBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook)

module.exports = router;