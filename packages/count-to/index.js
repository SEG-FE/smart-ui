import CountTo from './src/main'

CountTo.install = function (Vue) {
    Vue.component(CountTo.name, CountTo)
}

export default CountTo