import { dispatchInvoke } from '@barajs/redux'
import { pipe, payloadArg } from '@barajs/formula'

import { whenScannerCompleteFrom } from '../scanner'
import { report } from '../report'

export const homeTriggers = [
  whenScannerCompleteFrom('home::register', [
    pipe(
      report('register {.}'),
      // dispatchInvoke('scanner.scannerReset', payloadArg()),
    ),
  ]),
  // whenScannerReset([dispatchInvoke('scanner.scannerReset', payloadArg())]),
]
