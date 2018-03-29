import store from '../../store/index.js'

/*export default async (to, from, next) => {
  if (!store.getters['auth/check']) {
    next({ name: 'login' })
  } else {
    next()
  }
}*/

export default (to, from, next) => {
 /* if (store.getters['auth/check']) {
    return next()
  } else {
    return next({ name: 'login' })
  }*/
}
