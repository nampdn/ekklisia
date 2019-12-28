import { pipe, lensProp, takeFirst, assume } from '@barajs/formula'

export const getEventData = pipe(
  assume({
    kind: 'any-kind',
    name: '',
    propName: 'onSomethingHappen',
    data: {},
    args: [{ event: 'data' }],
  }),
  lensProp('args'),
  takeFirst(),
)
