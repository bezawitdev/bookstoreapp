import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import Books from './Book/Books';
import apiUrl from '../apiConfig';

import Book from './Book/Book';


function BookDescription() {
  const [book, setBook] = useState([])
  // const [deleted, setDeleted] = useState(false)
  const { id } = useParams();
  const history = useNavigate()
  let navigate = useNavigate();

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios(`http://localhost:5000/books/${id}`)
        const response = await axios(`${apiUrl}/books/${id}`)
        
        console.log(response)
        const result = response.data.book
        setBook(result)
      
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!book) {
      return <p>Loading...</p>
    }
  }, [book])

  // const destroy = () => {
  //  axios({

  //     //url: `${apiUrl}/blogs/${id}`,
  //     url: `http://localhost:5000/books/${id}`,
  //     method: 'DELETE'
  //   }).then(() => setDeleted(true)).catch(console.error)
  // }

  // useEffect(() => {
  //   if (deleted) {
  //     return navigate("/")
  //   }
  // }, [deleted, navigate])

  

  return (

    

    <Layout>
      <div>
        <div className="flex mt-32 border-dotted border-2 p-11 break-words"> 
        <div className="items-center">    
      <img src={book.image}  alt="pic"/>
      </div>
      <div className="ml-32 w-3/4">
        
      <h2 className='text-3xl'>{book.name} </h2>
      <h4 className="pl-8 pb-8">By: {book.author}</h4>
      <p className='text-md'>{book.description}</p>
      
      </div>
      </div> 
      {/* <button className="buttondelete-blog"onClick={() => destroy()} >Delete Post</button> */}

      {/* <NavLink to={`/blogs/${id}/edit`} >
        <button className="buttonedit-blog">Edit</button>
      </NavLink><br/> */}

<NavLink to="/books" >
<button type="submit" class="
      px-6
      py-2.5
      bg-green-900
      text-yellow-600
      font-medium
      text-md
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-slate-500 hover:shadow-lg
      focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-slate-500 active:shadow-lg
      transition
      duration-150
      ease-in-out ml-96 mt-2">Back to Books</button>




     </NavLink>
      {/* <NavLink className="backtoblogs" to="/books" >Back to Books</NavLink> */}
      </div>
    </Layout>
  )
}

export default BookDescription