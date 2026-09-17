import express from 'express'
import cors from 'cors'
import './config/database.js'
import usersRouter from './routes/users.js'
import activitiesRouter from './routes/activities.js'

const app = express()
const port = Number(process.env.PORT || 8000)

const codespaceName = process.env.CODESPACE_NAME
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/users', usersRouter)
app.use('/api/activities', activitiesRouter)

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`)
  console.log(`API base URL: ${baseUrl}`)
})