import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : 'file/:fileName',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/FileSingleContainer').default
      const reducer = require('./modules/fileSingle').default
      injectReducer(store, { key: 'fileSingle', reducer })
      cb(null, Counter)
    }, 'fileSingle')
  }
})
