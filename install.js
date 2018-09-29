import HalfeldCard from './components/HalfeldMenu/index.vue'
import HalfeldMenu from './components/HalfeldCard/index.vue'
import HalfeldLoading from './components/Loading/index.vue'

const components = [
  HalfeldCard,
  HalfeldMenu,
  HalfeldLoading
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.default.name, component.default)
  })
}

export default { install }
