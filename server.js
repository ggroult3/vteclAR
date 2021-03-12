const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/',express.static(__dirname))

app.get('/', (res,req) => {
    res.status(200).sendFile(__dirname + '/index.html')
    console.log('\nConnected to the webapp ! \n')
})

console.log('\nServer launched !')
app.listen(PORT, () => console.log('Listening on ' + PORT))