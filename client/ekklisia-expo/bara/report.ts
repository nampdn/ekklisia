import { report as defaultReport, isCyclic } from '@barajs/formula'
import Reactoron from '../components/Reactotron'

export const report = (message: any) => {
  let logger = Reactoron
  const formatter = (data: any) => {
    const cyclic = isCyclic(data)
    Reactoron.log(data)
    return cyclic ? '[cyclic Object]' : JSON.stringify(data, null, 2)
  }
  return defaultReport(message, logger, 'log', formatter)
}
