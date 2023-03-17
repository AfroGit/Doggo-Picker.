const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')


fetch(BREEDS_URL)
   .then(res => {
     return res.json();
   })
   .then(data => {
     const breedsObject = data.message;//Turns message into object.
     const breedsArray = Object.keys(breedsObject);//Turns object to array of keys
     // console.log(breedsObject);
     console.log(breedsArray);
   })

  
