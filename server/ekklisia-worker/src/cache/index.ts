import lruCache from 'lru-cache'

const options = {
  max: 500,
  length(n: any, key: string) {
    return n * 2 + key.length
  },
  dispose(_: any, n: any) {
    n.close()
  },
  maxAge: 1000 * 60 * 60
}

export const cache = new lruCache(options)
