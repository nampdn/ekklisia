import { AsyncStorage, NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import url from 'url'

let reactotron = Reactotron

reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
// Load Bundler Host IP
const { hostname: host } = url.parse(NativeModules.SourceCode.scriptURL)

if (__DEV__) {
  console.log(`Host machine: ${host}`)
  reactotron = reactotron.configure({ host }) // controls connection & communication settings
}

reactotron = reactotron
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

Reactotron.clear()

export default reactotron
