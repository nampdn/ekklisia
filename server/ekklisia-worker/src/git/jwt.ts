import { addProp, pipe, swapArg } from '@barajs/formula'

export const addJwtToPayload = addProp(
  'jwt',
  swapArg(1, pipe(({ app }) => app.getSignedJsonWebToken()))
)
