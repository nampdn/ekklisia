import React from 'react'

import { useBaraContext } from './context'

export function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg
}

export const useBara = ({
  kind = 'bara-component',
  name = '',
  handlers = [],
}: any) => {
  const context = useBaraContext()

  function mapProps(props) {
    const { data } = props
    const proxyProps = {}
    // Handle React component event using Bara directly
    if (handlers && handlers.length > 0)
      for (const propName of handlers) {
        if (typeof propName !== 'string') continue
        const prop = (...args: any[]) => {
          let overrideEventArgs = null
          if (propName in props && props[propName] !== undefined) {
            overrideEventArgs = props[propName](...args)
          }
          if (context) {
            context.event.emit('component-event', {
              kind,
              name,
              propName,
              data,
              args: overrideEventArgs !== null ? overrideEventArgs : args,
            })
          }
        }
        proxyProps[propName] = prop
      }

    return proxyProps
  }

  const getProps = (props = {}) => ({
    kind,
    name,
    handlers,
    ...mapProps(props),
  })

  function getBaraStateAndHelpers() {
    return { getProps, context }
  }

  return getBaraStateAndHelpers()
}

export interface BaraProps {
  kind: string
  name?: string
  data?: any
}

export interface BaraComponentProps extends BaraProps {
  children?: React.ReactChildren
  handlers: string[]
}

export const BaraComponent = ({
  children,
  ...props
}: BaraComponentProps): React.FC => {
  return unwrapArray(children)(useBara(props))
}
