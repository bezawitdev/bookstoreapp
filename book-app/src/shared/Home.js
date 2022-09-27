import Layout from './Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faCoffee , 'fa-react' as loo } from '@fortawesome/free-solid-svg-icons' ;
import { faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons' ;





const Home = () => {
  return (
    <div>
  <Layout>
    
   <div className="bg-fixed bg-cover h-screen w-auto" style={{backgroundImage: "url('https://data.whicdn.com/images/184083767/original.jpg')"}}>
    <p className="pl-96 pt-48  text-8xl">Magic Book Store</p>
   </div>

    </Layout>
    </div>
  )
}

export default Home