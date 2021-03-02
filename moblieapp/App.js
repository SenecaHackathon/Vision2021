import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import login from "./src/screens/Login/login";
import Splashscreen from "./src/screens/Splash/splashScreen";

const App = createStackNavigator({
  Splash: { screen: Splashscreen, navigationOptions: { header: null } },
  Login: { screen: login, navigationOptions:{headerShown: false}}
});

export default createAppContainer(App);
