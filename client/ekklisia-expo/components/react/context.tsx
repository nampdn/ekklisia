import EventEmitter from 'events'
import React, { useContext } from 'react'
import { Store } from 'redux'

export interface BaraContextState {
  bara: any
  byKind: { [k: string]: React.Component<any>[] }
  byName: { [k: string]: React.Component<any>[] }
  event: EventEmitter
}

export const context: BaraContextState = {
  bara: null,
  byKind: {},
  byName: {},
  event: new EventEmitter(),
}

export const BaraContext = React.createContext<BaraContextState>(context)
BaraContext.displayName = 'BaraContext'

export interface BaraProviderProps {
  children: React.ReactChildren
  store: Store
  bara: any
}

export const BaraProvider = ({ children }: any) => {
  return <BaraContext.Provider value={context}>{children}</BaraContext.Provider>
}

export const useBaraContext = () => {
  return useContext(BaraContext)
}
