const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data, 'post .then data')
    const breedsObject = data.message;//Turns message into object.
     // console.log(breedsObject, 'breedsObject')
    const breedsArray = Object.keys(breedsObject);//Turns object to array of keys
     // console.log(breedsArray, "breedsArray")
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');//<option></option>
      option.value = breedsArray[i];//<option value = 'breed'>
      option.innerText = breedsArray[i];
      select.appendChild(option);//Attach a <option> tag on the HTML
    }
  })


select.addEventListener('change', event => {
  // console.log(event.target.value)
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
  getDoggoImg(url);
  console.log(url)
})

const img = document.getElementById('.dog-img') 

const getDoggoImg = url => {
  fetch(url)//Going to above API url
    .then((res) => {
      // you don't need to do response.json() because you just need the url
       console.log(response.url, 'getDoggoImg');
      return res.json();//Get JSON message back
    })
    .then((data) => {
      // this return the url to insert to the href
       console.log(data.url)
      // **************************************************************
      // this is where the error is, the img with attribute src can't be asssigned because the <img src=""> is seen as null
      img.src = data.url//Extract message from JSON and attach to img tag as new source
    })
}



