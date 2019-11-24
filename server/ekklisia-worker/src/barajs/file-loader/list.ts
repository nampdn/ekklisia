import { Formula } from '@barajs/formula'
import { walk } from '@vgm/nodeasync'

export const listDirectory = (
  directory: string | Formula,
  ignorePattern?: RegExp
) => async (payload: any) => {
  try {
    const dir: string =
      typeof directory === 'string'
        ? directory
        : ((await (directory as Formula)(payload)) as string)
    const files = await walk(dir)
    return files.filter((file: string) => {
      return !ignorePattern.test(file)
    })
  } catch (err) {
    throw new Error(`Could not load files in ${directory}: ${err.message}`)
  }
}
