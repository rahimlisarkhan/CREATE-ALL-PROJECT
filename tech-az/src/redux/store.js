let render;

export let store = {

    user:{
        first_name:'',
        last_name:'',
        email:'',
    }
}



//Form
export const updateFormName = (value) => {

    store.user.first_name=value

    render()

} 

export const updateFormSurname = (value) => {

    store.user.last_name=value

    render()

} 
export const updateFormMail = (value) => {

    store.user.email=value


    render()
    
} 


//Subscriber
export const subscriber = (observer) => {
    render = observer
}


//SUBMIT FORM
export let addForm = (element) => {

    let formData = new FormData();
       formData.append("first_name", store.user.first_name);
       formData.append("last_name", store.user.last_name);
       formData.append("email", store.user.email);
    try{
        fetch('https://admin.tech.az/api/auth/account/', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "status": 415,
                "title": "Unsupported Media Type",
                "traceId": "|df46105a-49e1b43f80675626.",
                "type": "https://tools.ietf.org/html/rfc7231#section-6.5.13"
            },
            body: formData,
           
        }
        )
        .then((data)=>{
            console.log(data.status)
                element.style.display='block';
                element.style.zIndex=99999999999;
                // resert
                store.user.first_name=''
                store.user.last_name=''
                store.user.email=''

               render()
        } )
    
    }
    catch(err){
        console.log('Server error repeat please')
    }
    finally{
        console.log('Working complete')
    }

}






