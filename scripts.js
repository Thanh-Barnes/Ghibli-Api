
const app = document.querySelector('#root')

// Create a container and insert logo
const logo = document.createElement('img')
logo.src = 'ghiblilogo.png'
logo.alt = '"Ghibli Logo"'

const container = document.createElement('div')

container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// fetch ghibli api instead of xmlhttprequest method
fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {    
        return response.json()
    })
    .then((data) => {

        const movieData = data

        if (data.length > 0) {

            movieData.forEach((movie) => {
                
                // create a card with card class
                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                // create h1 and set text content to movie title
                let h1 = document.createElement('h1')
                h1.innerHTML = movie.title

                // create p and set text content to movie description and limit char
                const p = document.createElement('p')
                moviedescription = movie.description.substring(0, 300) //limit to 300 char
                p.innerHTML = `${moviedescription}...` //end with an ellipse

                container.appendChild(card)
                
                card.appendChild(h1)
                card.appendChild(p)
            })
         }
    })
    .catch((err) => {
            console.log(err)
    })


