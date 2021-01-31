export { default as Header } from '../../components/Header/Header.vue'

export const LazyHeader = import('../../components/Header/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
