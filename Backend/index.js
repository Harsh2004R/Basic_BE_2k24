import express from 'express';
const app = express()
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.get('/api/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: "harsh",
            age: 20
        }, {
            id: 2,
            name: "rahul",
            age: 18
        }, {
            id: 3,
            name: "nishant",
            age: 19
        }
    ]
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})