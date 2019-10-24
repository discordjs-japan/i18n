import * as got from 'got'
import * as fs from 'fs'
import * as path from 'path'

got.post('/api/project/discordjs/status', {
  json: true,
  baseUrl: 'https://api.crowdin.com',
  query: {
    json: true,
    key: process.env.CROWDIN_APIKEY
  }
}).then(data => {
  fs.writeFileSync(
    path.join(__dirname, '../stats.json'),
    JSON.stringify(data.body, null, 2)
  )
})
