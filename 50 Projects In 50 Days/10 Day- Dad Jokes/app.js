const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const a = document.getElementsByName().values;


jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING async
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
console.log(a);
  const res = await  fetch('https://icanhazdadjoke.com', config)
        
      const data = await res.json()
    jokeEl.innerHTML = data.joke  
}

// USING .then()
/*
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}

*/



