import { useRef, useCallback, Dispatch, SetStateAction } from 'react'
import { Animated } from 'react-native'
import { useBaraContext } from '../context'

type ReactSetState<T> = Dispatch<SetStateAction<T>>

export interface RegisterParams<T> {
  key: string
  value: T
  payload?: any
}

export interface RegisterEventConfig<T> {
  kind: string
  name?: string
  data?: any
  preHook?: (args: T) => void
  handler?: (args: T) => void
}

export interface RegisterStateConfig {
  [k: string]: any | string | boolean | null
}

export interface UseBaraComponentProps {
  componentName: 'string'
}

export type RegisterAnimateConfig = {
  [k: string]: Animated.Value
}

export type ReactState<S extends any> = {
  [T in keyof S]: S[T]
}

export type ReactAnimation<A extends RegisterAnimateConfig> = {
  [T in keyof A]: A[T]
}

export type BaraComponentHookResult = {
  registerEvent: <T>(args: RegisterEventConfig<T>) => (args?: T) => void
  registerAnimation: (animationConfig: RegisterParams<Animated.Value>) => void
  registerState: <T>(
    stateConfig: RegisterParams<ReactSetState<T>>,
  ) => ReactSetState<T>
}

/**
 * Register Bara component handler
 * @param name Component Name
 */
export const useBaraComponent = (): BaraComponentHookResult => {
  const context = useBaraContext()
  const previousStates = useRef({})

  const createProxySetState = <T>(
    key: string,
    setOriginState: ReactSetState<T>,
    payload: any,
  ) => (value: T) => {
    if (value !== previousStates.current[key]) {
      previousStates.current[key] = value
      context.state[key] = value
      context.event.emit('component-state', {
        stateName: key,
        value,
        payload,
      })
    }
    setOriginState(value)
  }

  const registerEvent = useCallback(
    <T>({ kind, name, data, preHook, handler }: RegisterEventConfig<T>) => (
      args: T
    ) => {
      context.event.emit('component-event', {
        kind,
        name,
        propName: name,
        data,
        args: preHook ? preHook(args) : args,
      })
      // Invoke default event handler from prop
      if (handler) {
        handler(args)
      }
    },
    [],
  )

  const registerState = useCallback(
    <T>(stateConfig: RegisterParams<ReactSetState<T>>) => {
      const { key, value: setOriginState, payload } = stateConfig
      return createProxySetState(key, setOriginState, payload)
    },
    [],
  )

  const registerAnimation = useCallback(
    ({ key, value, payload }: RegisterParams<Animated.Value>) => {
      if (!(key in context.animation)) {
        context.animation[key] = [{ value, payload }]
      } else {
        context.animation[key].push({ value, payload })
      }
    },
    [],
  )

  return { registerEvent, registerState, registerAnimation }
}
