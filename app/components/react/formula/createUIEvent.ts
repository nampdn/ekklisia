import { cond, act, and, VirtualActionConfig } from '@barajs/core'
import { p, Formula } from '@barajs/formula'
import { whenComponentEmit, kindEq } from '../react'

export type EventFunction<T> = (formulas: Formula[]) => VirtualActionConfig<T>

const createComponentEvent = (kind: string): EventFunction<any> => (
  formulas: Formula[],
) => whenComponentEmit(cond(and(kindEq(kind)), act(p(...formulas))))

export type CreateEventParams<E extends object> = {
  [T in keyof E]: string
}

export type BaraEventMap<E extends object> = {
  [T in keyof E]: EventFunction<any>
}

export const createEvent = <T extends object>(
  eventMap: CreateEventParams<T>,
): BaraEventMap<T> => {
  const map: any = {}
  for (const eventName in eventMap) {
    map[eventName] = createComponentEvent(eventMap[eventName])
  }
  return map
}
