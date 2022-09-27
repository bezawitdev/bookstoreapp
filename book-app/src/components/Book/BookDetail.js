import axios from 'axios';
import React, { useEffect } from 'react';
import {useParams, useNavigate, NavLink} from 'react-router-dom';
import {useState} from 'react';
import Layout from '../../shared/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons' ;
import apiUrl from '../../apiConfig';

function BookDetail() {
    const [inputs, setInputs] = useState({})
    const [checked, setChecked] = useState(false);
    const id = useParams().id;
    const history = useNavigate()
    console.log(id)
    useEffect(() => {
        const fetchHandler = async() => {
          await axios.get(`${apiUrl}/books/${id}`).then(res => res.data).then(data => setInputs(data.book))
            // await axios.get(`http://localhost:5000/books/${id}`).then(res => res.data).then(data => setInputs(data.book))
        }
        fetchHandler()
    },[id])

    const sendRequest = async() => {
      
      await axios.put(`${apiUrl}/books/${id}`, {
        // await axios.put(`http://localhost:5000/books/${id}`, {
            name:String(inputs.name),
      author: String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res => res.data);
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/books"))
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
          }))
    }
  return (
    
    <div>
        <Layout/>




        <div class="block p-18 rounded-lg shadow-lg bg-white max-w-2xl justify-items-center m-20 ml-96">
  <form onSubmit={handleSubmit}>
    <div class="form-group mb-6">
      <label class="form-label inline-block mb-2 text-gray-700">Name:</label>
      <input type="text" value={inputs.name} onChange={handleChange} name="name" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
         placeholder="Enter Book Title"/>
      
    </div>
    <div class="form-group mb-6">
      <label class="form-label inline-block mb-2 text-gray-700">Author:</label>
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Enter Author Name" value={inputs.author} name="author" onChange={handleChange}/>
    </div>

    <div class="form-group mb-6">
      <label class="form-label inline-block mb-2 text-gray-700">Description:</label>
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Enter Description Name" value={inputs.description} onChange={handleChange} name="description"/>
    </div>

    <div class="form-group mb-6">
      <label class="form-label inline-block mb-2 text-gray-700">Price:</label>
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Enter Price" value={inputs.price} onChange={handleChange} name="price"/>
    </div>


    <div class="form-group mb-6">
      <label class="form-label inline-block mb-2 text-gray-700">Image:</label>
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Enter Image Url" value={inputs.image} onChange={handleChange} name="image"/>
    </div>




    <div class="form-group form-check mb-6">
      <input type="checkbox"
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        id="exampleCheck1"/>
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">Available</label>
    </div>
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
      ease-in-out">Update Book</button>



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
      ease-in-out ml-4">Cancel</button>




     </NavLink>
  </form>
</div> 
    </div>
  )
}

export default BookDetail