import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {store,subscriber, updateFormName,updateFormSurname,updateFormMail,addForm} from './redux/store';



export const render = () =>{
  return(
    ReactDOM.render(
      <BrowserRouter>
      <App store={store}  updateFormName={updateFormName}
        updateFormSurname={updateFormSurname}
        updateFormMail={updateFormMail}
        addForm={addForm} />
      </BrowserRouter>,
      document.getElementById('root')
    )
  )
}


render()

subscriber(render)

