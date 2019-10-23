import * as path from 'path'
import * as del from 'del'
import { sync as glob } from 'glob'
import { sync as mkdir } from 'make-dir'
import { readFileSync, writeFileSync } from 'fs'
import { Document } from './lib/document-types'
import filter from './lib/filter-content'

const englishBasepath = path.join(__dirname, '..', 'content', 'en-US')

main()

async function main() {
  await del(englishBasepath)
  await generateDocs()
}

async function generateDocs() {
  const files = glob('./source/*/*.json')

  files.forEach(file => writeDoc({
    path: file,
    name: path.basename(file),
    repo: path.basename(path.dirname(file))
  }))
}

interface DocInfo {
  path: string
  name: string
  repo: string
}

async function writeDoc(doc: DocInfo) {
  const filename = path.join(doc.repo, doc.name)
  const filepath = path.join(englishBasepath, 'docs', filename)

  mkdir(path.dirname(filepath))

  const file = readFileSync(doc.path).toString()
  const document: Document = JSON.parse(file)

  const sentences = filter(document)

  writeFileSync(filepath, JSON.stringify(sentences, null, 2))
}
