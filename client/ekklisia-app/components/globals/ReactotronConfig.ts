import { AsyncStorage, NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import url from "url";

// Load Bundler Host IP
const { hostname: host } = url.parse(NativeModules.SourceCode.scriptURL);
console.log(`Host machine: ${host}`);

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ host: host }) // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

Reactotron.clear();

export default reactotron;
