import * as got from 'got'
import * as fs from 'fs'
import * as path from 'path'
import * as assert from 'assert'

const contents = fs.readdirSync('./content/')

interface LocaleStats {
  code: string
  [others: string]: any;
}

got.post('/api/project/discordjs/status', {
  json: true,
  baseUrl: 'https://api.crowdin.com',
  query: {
    json: true,
    key: process.env.CROWDIN_APIKEY
  }
}).then(res => {
  const data: LocaleStats[] = res.body
  const stats = data.map(locale => {
    const matched = contents.filter(code => code.startsWith(locale.code))
    assert(matched.length < 2,
      `Invalid locale code: ${locale.code}\n` +
      `\tMatched: ${path.join(', ')}`)
    return { ...locale, path: matched[0] }
  })
  fs.writeFileSync(
    path.join(__dirname, '../stats.json'),
    JSON.stringify(stats, null, 2)
  )
})
