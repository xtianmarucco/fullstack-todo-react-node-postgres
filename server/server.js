const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
// app.get('/', (req, res)=>{
//     res.send('Soy el server, si ves esto es por que esta todo bien')
// })
app.use(cors())

app.get('/todos/:userEmail', async (req, res) => {
  console.log(req)
  const { userEmail } = req.params
  console.log(userEmail)
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])
        res.json(todos.rows)
    } catch (err) {
        console.log(err);

    }
})
app.listen(PORT, () => console.log(`server running in PORT ${PORT}`))