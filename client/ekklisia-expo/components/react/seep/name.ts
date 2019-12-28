import { BaraComponentPayload } from '../types'

export const nameEq = (name: string) => (payload: BaraComponentPayload) =>
  payload.name === name
