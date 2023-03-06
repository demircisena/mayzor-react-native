import React from "react";

import { View, Text,TouchableOpacity} from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Post } from "./component";
import { Opportunity } from "./component";
import { Voted } from "./component/";
import Navigation from "./navigation";
import { SignIn } from "./screens";
import { SignUp } from "./screens";
import { Home } from "./screens";

const Root = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}> 
         <View style={{flex:1}}>
          <Navigation />
          {/* <SignIn/>  */}
           {/* <SignUp/> */}
           {/* <Post/>  */}
           {/* <Post/> 
           <Post/>  */}
          {/* <Opportunity/>
          <Voted/> */}
          {/* <Home/> */}
      
          
           
        </View> 
       </GestureHandlerRootView>
    </>
  );
};

export default Root;



