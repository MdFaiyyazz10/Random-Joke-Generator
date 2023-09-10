const btn = document.getElementById("btnjoke")
const generateJoke = document.getElementById("joke")

btn.addEventListener('click', async ()=>{
    // console.log("clicked ")

    generateJoke.innerHTML = "Loading Jokes..."
    generateJoke.style.fontWeight = "600"

    //disabling button
    btn.disabled = true
    btn.innerHTML = "Loading Jokes..."
    //FETCHING JOKES
    const apikey = "04512574e925f7944f458f41ed2b"
    const url = `https://hindi-jokes-api.onrender.com/jokes/1?api_key=${apikey}`

    const response = await fetch(url) 
    const data = await response.json()
    // console.log(data.data[0].jokeContent)
    const joke = data.data[0].jokeContent

   

    //ADDING JOKES
    generateJoke.innerHTML = joke

    //Enabling button
    btn.disabled = false
    btn.innerHTML = "Tell me a Joke"

})