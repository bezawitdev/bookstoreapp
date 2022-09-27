import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import apiUrl from '../../apiConfig';
import Layout from '../../shared/Layout';
const URL = "http://localhost:5000/books";


// const getPopular =async() =>{
   
//   let response1 = await popularTvShows();
//  console.log("popularshows response",response1)
//  const  data= response1.data.results;
//  console.log("populardata", data)
//       setPopular(data)     

// }
const fetchHandler = async () => {
  return await axios.get(`${apiUrl}/books`).then((res) => res.data)
  // return await axios.get(URL).then((res) => res.data)
      
    // console.log(response.data, 'setbooks')
 }
const Books = () => {
  
  const  [books, setBooks] = useState();
  
 useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books))
  }, []);
  // const fetchHandler = async () => {
   
  //     await axios.get(URL).then((response) => {
  //       setBooks(response.data)
       
  //       // console.log(response.data, 'setbooks')
  //     })
  //   }
   
//   const fetchHandler = async() => {
// return await axios.get(URL).then((response) => response.data)
   
//   }
  
  // useEffect(() => {
  //   fetchHandler().then(data => setBooks(data))
  // },[])
  // useEffect(()=>{
  //   fetchHandler()
  // }, [""])
  console.log(books, 'setbooks')
// console.log(books)
  return (
    <div>
      <Layout/>
      <div class="bg-slate-50 flex flex-wrap">
        {books && books.map((book) => (
          <div>
            <Book book={book}/>
          </div>
        ))}
     </div>
    </div>
  )
}

export default Books