import Nav from './Nav'



const Layout = (props) => {
  return (
  <div>
    {/* <h1>Items App</h1> */}
    <Nav />

     {props.children} 
    
     </div>
  )
}

export default Layout