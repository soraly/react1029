import test from 'tape';

import { getUser } from './index'

test('incrementAsync Saga test', (assert) => {
  const gen = getUser()
    
  assert.deepEqual(
    22,
    33,
    'incrementAsync Saga must call delay(1000)'
  )

  assert.end()
  // now what ?
});