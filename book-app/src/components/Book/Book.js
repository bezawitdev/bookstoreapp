import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons' ;
import BookDescription from '../BookDescription';
import apiUrl from '../../apiConfig';

function Book(props) {
  const [deleted, setDeleted] = useState(false)
  const history = useNavigate()
    const {_id, name, author, description, price,image} = props.book;
// const deleteHandler = () => {
//   axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>history("/books"))
// }

// const response = await axios(${apiUrl}/blogs/${id})
const deleteHandler = async()=>{
      await axios
      .delete(`${apiUrl}/books/${_id}`)
        // .delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data)
        .then(()=>history("/"))
        .then(()=> history("/books"))
    }
   
    // const deleteHandler = async() => {
    //  await axios({
    //      url: `http://localhost:5000/books/${_id}`,
    //      method: 'DELETE'
    //    }).then(() => setDeleted(true)).catch(console.error)
    //  }
   
    //  useEffect(() => {
    //    if (deleted) {
    //      return history("/books")
    //    }
    //  }, [deleted, history])
   
    
  return (
   
     <div class="bg-slate-50 flex flex-wrap ml-6">
      <div>
        <div class="bg-white rounded-xl overflow-hidden border m-4 w-48 transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
           
        {/* <img onClick={()=> navigate(`/blogs/${blog._id}`)}src={blog.image}  alt="pic"/> */}

           <img src={image} alt={name} onClick={()=> history(`/books/${_id}/desc`)} class="w-48 h-40"/>
          <div className="p-3">
          <h2 class="text-gray-600 font-bold font-roboto  text-lg leading-tight truncate">{name}</h2>
        <article class="text-gray-600 font-semibold pl-2">By: {author}</article>
        
        {/* <p>{description}</p> */}
        <p class="text-sm text-gray-600 font-roboto pl-10 pt-3 italic">${price}</p>
        <div class="items-end">
        <NavLink to={`/books/${_id}`}>
          <button>
          <FontAwesomeIcon icon={faPenToSquare} />
            </button>
        </NavLink>
        <button class="m-3" onClick={() => deleteHandler()}>
          
        <FontAwesomeIcon icon={faTrashCan} />
          </button>
       {/* <a role="button" href='#' class="text-white bg-purple-600 px-2 py-2 rounded-sm hover:bg-purple-700">Detail</a> */}
       </div>
       </div>
        </div>
        </div>
      </div>
  )
}

export default Book