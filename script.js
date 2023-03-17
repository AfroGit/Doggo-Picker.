const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')


fetch(BREEDS_URL)
   .then(res => {
     return res.json();
   })
   .then(data => {
     const breedsObject = data.message;//Turns message into object.
     const breedsArray = Object.keys(breedsObject);//Turns object to array of keys
     for(let i = 0; i < breedsArray.length; i++){
       
     const option = document.createElement('option')//<option></option>
           option.value = breedsArray[i]//<option value = 'breed'>
           option.innerText = breedsArray[i]
     
     }

     
     // console.log(breedsObject);
     console.log(breedsArray);
   })

  
