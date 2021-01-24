import React  from 'react'
import {FiUser,FiMail } from "react-icons/fi";
import {AiOutlineCloseCircle } from "react-icons/ai";



const Form = (props) => {

    //Close
    let handleClose = (e) =>{
        e.target.parentElement.parentElement.style.display='none';
        e.target.parentElement.parentElement.style.zIndex='-9999999';
    }
    //Form
    let handleChangeInputName = (e) =>{

        props.data.updateFormName(e.target.value)
    }

    let handleChangeInputSurname = (e) =>{


        props.data.updateFormSurname(e.target.value)
    }

    let handleChangeInputMail = (e) =>{
        props.data.updateFormMail(e.target.value)
    }


    let handleClick = (e) =>{
        e.preventDefault();
        let formPopup = e.target.parentElement.nextElementSibling

        props.data.addForm(formPopup)
     
   }

    return(
        <>
        <form className="home-page-content__form" id='5'>
             <h1>Join us</h1>
             <div className="home-page-content__form__group">
             <FiUser className='icon' /> <input type='text'
                                                required onChange={(e)=>handleChangeInputName(e)}
                                                placeholder=' name'
                                                value={props.data.store.user.first_name}
               />
             <input type='text' required  
                    placeholder='surname'  
                    onChange={(e)=>handleChangeInputSurname(e)}
                    value={props.data.store.user.last_name}
             />
             </div>
             <div className="home-page-content__form__group">
             <FiMail className='icon'/> <input  type='email' required  
                                                onChange={(e)=>handleChangeInputMail(e)}
                                                placeholder='email'
                                                value={props.data.store.user.email}
            />
             </div>
             <input type='submit' onClick={(e)=>handleClick(e)} value='Join' className="btn-join"/>  
        </form>


        <div className='form-popup'>
                <div className='form-popup__window'>
                    <h1>Thank you for joining us! <br/>
                        We will contact you shortly.. </h1>
                        <AiOutlineCloseCircle onClick={(e)=>{handleClose(e)}} className='popup-close'/>
                </div>
        </div>
        </>
    )
}


export default Form