import store from '../../store/index.js'

export default (to, from, next) => {
  /*if (store.getters['auth/check']) {
    return next({ name: 'dashboard' })
  } else {
    return next()
  }*/
  return next();
}
