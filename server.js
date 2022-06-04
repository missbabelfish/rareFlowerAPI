const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


// app.use(cors())

const flowers = {
    'Titan Arum': {
        'name': 'Titan Arum',
        img: 'https://www.gardeningchores.com/wp-content/uploads/2021/02/2._Titan-Arum-Amorphophallus-titanum.jpg',
        'species': 'Amorphophallus Titanum',
        'type': 'Bulbous flowering herbaceous perennial (with a huge corm, the largest weighed 201 lb., or 91 kg)',
        'size': 'Up to 12 feet tall (3.6 meters!), and that’s the flower, not the plant.',
        'conservation': 'Endangered',
        'origin': 'Only from equatorial rainforests of Sumatra in Indonesia.',
        'homegrow': 'Yes you can! The corms are easy to grow, as long as you have a massive greenhouse. It is grown in botanical gardens all over the world.',
        'whyRare': 'Limited environment and very rare blooming.'
    },
    'Western Underground Orchid': {
        'name': 'Western Underground Orchid',
        img: 'https://www.gardeningchores.com/wp-content/uploads/2021/02/4._Western-Underground-Orchid-Rhizanthella-gardneri.jpg',
        'species': 'Rhizanthella Gardneri',
        'type': 'Leafless herb',
        'size': '2.4 to 4.7 inches as a whole (60 to 120 mm)',
        'conservation': 'Critically  endangered',
        'origin': 'Southwest and western Australia',
        'homegrow': 'No.',
        'whyRare': 'Its habitat has been destroyed to make room for arable land.'
    },
    'Cookes Kokio': {
        'name': 'Cooke\'s Kokio',
        img: 'https://www.gardeningchores.com/wp-content/uploads/2021/02/10._Cookes-Kokio-Kokia-cookei.jpg',
        'species': 'Kokia Cookei',
        'type': 'Deciduous tree',
        'size': 'Up to 10 feet tall (10 meters)',
        'conservation': 'Extinct in the wild',
        'origin': 'Hawaii',
        'homegrow': 'No',
        'whyRare': 'Very rare, difficult to grow and limited habitat.'
    },
    'Black Bat Flower': {
        'name': 'Black Bat Flower',
        img: 'https://www.gardeningchores.com/wp-content/uploads/2021/02/11._Black-Bat-Flower-Tacca-chantrieri-1.jpg',
        'species': 'Tacca Chantrieri',
        'type': 'Herbaceous flowering perennial',
        'size': 'About 4 to 6 feet tall and in spread (120 to 180 cm). The flowers can reach 28 inches across (70 cm!)',
        'conservation': 'Endangered',
        'origin': 'Southeast Asia',
        'homegrow': 'Yes.',
        'whyRare': 'Over-exploitation of the natural habitat of the plant.'
    },
    'Dutchmans Pipe Cactus': {
        'name': 'Dutchman\'s Pipe Cactus',
        img: 'https://www.gardeningchores.com/wp-content/uploads/2021/02/16._Dutchmans-Pipe-Cactus-Epiphyllum-oxypetalum-1.jpg',
        'species': 'Epiphyllum Oxypetalum',
        'type': 'Succulent cactus',
        'size': 'Up to 6 feet long (180 cm)',
        'conservation': 'Least concern',
        'origin': 'India and Sri Lanka',
        'homegrow': 'Absolutely, and it is easy too.',
        'whyRare': 'In Nature, its habitat is shrinking.'
    },
    'unknown': {
        'name': 'unknown',
        img: '',
        'species': 'unknown',
        'type': 'unknown',
        'size': 'unknown',
        'conservation': 'unknown',
        'origin': 'unknown',
        'homegrow': 'unknown',
        'whyRare': 'unknown'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const flower = request.params.name
    if (flowers[flower]) {
        response.json(flowers[flower])
    } else {
        response.json(flowers[unknown])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}. WHEEE`)
})