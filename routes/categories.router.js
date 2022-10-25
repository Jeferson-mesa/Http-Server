const express = require('express');

const router = express.Router()

router.get("/", (req,res) => {
    res.json(
        [
            {
                name: "Science fiction",
            },
            {
                name: "Horror",
            },
            {
                name: "History",
            },
            {
                name: "Romance",
            },
            {
                name: "Fantasy",
            },
        ]
    )
})

module.exports = router