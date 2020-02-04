import { useEffect, useCallback } from 'react'
import { useBaraContext } from '../context'

export type BaraCallbackType = 'state' | 'event' | 'animation'

export const useBaraCallback = (
  type: BaraCallbackType,
  key: string,
  callback: (...args: any[]) => void,
  dependencies: any[] = [],
) => {
  const context = useBaraContext()
  const proxiedCallback = useCallback((stateData: any) => {
    const { stateName, value } = stateData
    if (stateName === key) {
      callback(value)
    }
  }, dependencies)

  useEffect(() => {
    const stateCallback = context.event.addListener(
      `component-${type}`,
      proxiedCallback,
    )
    return () => {
      context.event.removeListener(`component-${type}`, proxiedCallback)
    }
  }, [])
}
