import { s, lensProp, takeFirst, assume } from '@barajs/formula'

export const getEventData = s(
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
