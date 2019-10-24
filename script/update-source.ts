import * as simplegit from 'simple-git/promise'

const git = simplegit().outputHandler((_, stdout, stderr) => {
  stdout.pipe(process.stdout)
  stderr.pipe(process.stderr)
})

main()

async function main() {
  await git.submoduleUpdate(['--init', '--remote'])
  await git.add('source')
  await git.commit('auto: Update source content')
}
