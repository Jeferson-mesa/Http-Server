const express = require('express');

const router = express.Router()

router.get("/", (req, res) => {
    res.json([
        {
            name: "Interestellar",
            Director: "Christopher Nolan",
            year: 2014,
        },
        {
            name: "It",
            Director: "Andrés Muschietti",
            year: 2017,
        },
        {
            name: "The Imitation Game",
            Director: "Morten Tyldum",
            year: 2014,
        },
        {
            name: "The Fault in Our Stars",
            Director: "Josh Boone",
            year: 2014,
        },
        {
            name: "Harry Potter and the Prisoner of Azkaban",
            Director: "Alfonso Cuarón",
            year: 2004,
        },
        
    ])
})

module.exports = router