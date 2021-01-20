import React  from 'react'
import { FaUserAlt,FaMailBulk } from "react-icons/fa";



const Form = () => {
    let name = React.createRef(),
            surname = React.createRef(),
            email = React.createRef();
   let handleClick = (e) =>{
        
        let nameValue = name.target;

        // console.log(name.target.value)
        // console.log(surname.target.value)
        // console.log(email.target.value)
        console.log(nameValue)
   }

    return(
        <div className="home-page-content__form" id='5'>
            <h1>Join us</h1>
             <div className="home-page-content__form__group">
             <FaUserAlt className='icon' /> <input type='text' ref={name} placeholder=' name'/>
             <input type='text' ref={surname} placeholder='surname'/>
             </div>
             <div className="home-page-content__form__group">
             <FaMailBulk className='icon'/> <input type='email' ref={email} placeholder='email'/>
             </div>
             <button type='submit' onClick={(e)=>handleClick(e)} className="btn-join"> Join </button>
        </div>
    )
}


export default Form