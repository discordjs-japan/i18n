import simpleGit from 'simple-git'

const git = simpleGit().outputHandler((_, stdout, stderr) => {
  stdout.pipe(process.stdout)
  stderr.pipe(process.stderr)
})

main()

async function main() {
  await git.submoduleUpdate(['--init', '--remote'])
  await git.add('source')
  await git.commit('auto: Update source')
}
