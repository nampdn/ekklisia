import { dispatchInvoke } from '@barajs/redux'
import { pipe, gather, lensProp, takeFirst, payloadArg } from '@barajs/formula'

import { whenScannerComplete, whenScannerReset } from './event'
import { report } from '../report'

export const scannerTrigger = [
  whenScannerComplete([
    pipe(
      gather({
        scannerData: pipe(lensProp('args'), takeFirst()),
        from: lensProp('data.from'),
      }),
      dispatchInvoke(
        'scanner.scannerComplete',
        gather({
          type: lensProp('scannerData.type'),
          data: lensProp('scannerData.data'),
          target: lensProp('scannerData.target'),
          from: lensProp('from'),
        }),
      ),
    ),
    report('{.}'),
  ]),
  // whenScannerReset([dispatchInvoke('scanner.scannerReset', payloadArg())]),
]
