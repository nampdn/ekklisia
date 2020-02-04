import { BaraComponentPayload } from '../types'

export const propNameEq = (propName: string) => (
  payload: BaraComponentPayload,
) => {
  return payload.propName === propName
}
