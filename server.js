import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
​
app.set('port', process.env.PORT || 3005)
​
app.listen(app.get('port'), () => {
  console.log(`This server is running on http://localhost:${app.get('port')}`)
})