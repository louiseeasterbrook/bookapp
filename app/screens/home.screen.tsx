import { ReactNode } from "react";
import { Button, Text, View } from "react-native";

export const HomeScreen = (): ReactNode =>{

    return(
        <View >
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => console.log("go")}
        />
      </View>
  
    )

}