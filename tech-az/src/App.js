//Router
import { Route } from 'react-router-dom';

//SASS
import './sass/App.scss';

//Pages
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';


//APP
let App = (props) => {

  console.log(props)
  return (
    <section className="container">
         <Navbar />
         <Route path="/" exact render={() =><HomePage data={props}/>}/>
         <Footer/>
      {/* <Header data={data.user} />
      <Navbar />
      <Route path='/' exact render={()=><ProfilePage data={data}/>} />
      <Route path='/messages'  render={()=><MessagesPage data={data.user}/>} /> */}

    </section>
  );
}


export default App;
