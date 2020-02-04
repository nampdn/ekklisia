import { BaraComponentPayload } from '../types'

export const kindEq = (kind: string) => (payload: BaraComponentPayload) =>
  payload.kind === kind
