import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './shared/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import Book from './components/Book/Book';
import BookDetail from './components/Book/BookDetail';
import BookDescription from './components/BookDescription';
import NewyorkSeller from './components/NewyorkSeller';

function App() {
  const location = useLocation();

  return (
    <div class="text-yellow-600">
      <h3>{location.state ? location.state.msg: null }</h3>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/Add-Book' element={<AddBook />} /> 
        <Route exact path='/books/:id' element={<BookDetail />} />
        <Route path='/books/:bookid' element={<BookDescription />} />
        {/* <Route path='/Books/:id/edit' element={<ItemEdit />} />  */}
        {/* <Route path='/books/:id' element={<BookDescription />} /> */}
        <Route path='/books/:id/desc' element={<BookDescription />} />
        <Route path='/NewyorkSeller' element={<NewyorkSeller />} />
        <Route path='/NewyorkSeller/:id/more' element={<BookDescription />} />
        


      </Routes>

    </div>
  );
}


export default App;