import React, { Component } from "react";
import { View, Image } from "react-native";

var logo = require("../../../assets/Vision.png");
class splashScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={logo}></Image>
      </View>
    );
  }
}

export default splashScreen;
