import EventEmitter from 'events'
import React, { useContext } from 'react'
import { Animated } from 'react-native'
import { Store } from 'redux'

interface AnimatedRef {
  value: Animated.Value
  payload: any
}

type AnimationRefList = Array<AnimatedRef>

export interface BaraContextState {
  bara: any
  byKind: { [k: string]: React.Component<any>[] }
  byName: { [k: string]: React.Component<any>[] }
  event: EventEmitter
  animation: Record<string, AnimationRefList>
  state: { [k: string]: any }
  otherRefs: any
}

const eventEmitter = new EventEmitter()
eventEmitter.setMaxListeners(0)

export const context: BaraContextState = {
  bara: null,
  byKind: {},
  byName: {},
  event: eventEmitter,
  animation: {},
  state: {},
  otherRefs: {},
}

export const BaraContext = React.createContext<BaraContextState>(context)
BaraContext.displayName = 'BaraContext'

export interface BaraProviderProps {
  children: React.ReactChildren
  store: Store
  bara: any
}

export const BaraProvider = ({ children, ...otherRefs }: any) => {
  context.otherRefs = otherRefs
  return <BaraContext.Provider value={context}>{children}</BaraContext.Provider>
}

export const useBaraContext = () => {
  return useContext(BaraContext)
}
