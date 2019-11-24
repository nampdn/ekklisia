import { readFileAsync } from '@vgm/nodeasync'

export const readAsRaw = () => async (path: string) => {
  const doc = await readFileAsync(path, { encoding: 'utf8' })
  return { doc, path }
}
