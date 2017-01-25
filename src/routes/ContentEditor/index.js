import { injectReducer } from '~/store/reducers'

export default (store) => ({
  path : 'editor',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Editor = require('./components/ContentEditor').default
      const reducer = require('./modules/editor').default
      injectReducer(store, { key: 'editor', reducer })
      cb(null, Editor)
    }, 'editor')
  }
})

