import React, {useEffect,useState} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';

import axios from "axios";
import Layout from '../shared/Layout';


function NewyorkSeller() {


const API = "voBdV86J0MSLmAXydB0PgE9pynVT5j7t";
const { id } = useParams();
const history = useNavigate()
   const[seller,setSeller]= useState([]);
   
    useEffect(()=>{
    getBooks();

   },[]);
  

   const getBooks = async () => {


    try{
    const response = await  axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API}`);
        console.log("alldata", response)
    const  data= response.data.results.books ;

    setSeller(data);


    }
    catch(error){
            return (error)
    }
   

}
  



  return (
    <div className='home'>
     <Layout />
     <div class="bg-slate-50 flex flex-wrap">
{seller && seller.map((book)=>{
            return <div class="bg-slate-50 flex flex-wrap ml-6">
     <div>
       <div class="bg-white rounded-xl overflow-hidden border m-4 w-48 transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          
       {/* <img onClick={()=> navigate(`/blogs/${blog._id}`)}src={blog.image}  alt="pic"/> */}

          <img src={book.book_image} alt={book.title} class="w-48 h-40"/>
          {/* onClick={()=> history(`/NewyorkSeller/${id}/more`)} class="w-48 h-40"/> */}
         <div className="p-3">
         <h2 class="text-gray-600 font-bold font-roboto  text-lg leading-tight truncate">{book.title}</h2>
       <article class="text-gray-600 font-semibold pl-2">By: {book.author}</article>
       
       {/* <p>{description}</p> */}
       {/* <p class="text-sm text-gray-600 font-roboto pl-10 pt-3 italic">${price}</p> */}
       {/* <div class="items-end">     */}
         </div>
      </div>
       </div>
       </div>
      } )}
     </div>
     </div>

)
}

export default NewyorkSeller
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        