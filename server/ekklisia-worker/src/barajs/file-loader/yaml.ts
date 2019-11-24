import { readFileAsync } from '@vgm/nodeasync'
import { load } from 'js-yaml'

export const readAsYaml = () => async (path: string) => {
  const first = await readFileAsync(path, { encoding: 'utf8' })
  const doc = load(first)
  return { doc, path }
}

export const readAsYamlList = (yamlName: string = 'book.yaml') => async (
  files: string[]
) => {
  const yamlVersions = files.filter(f => f.endsWith(yamlName))
  const results = yamlVersions.map(async (path: string) => {
    const first = await readFileAsync(path, { encoding: 'utf8' })
    const doc = load(first)
    return { doc, path }
  })
  return Promise.all(results)
}
