import { ReactNode } from "react";
import { Button, Text, View } from "react-native";

export const SettingsScreen = (): ReactNode =>{

    return(
        <View >
        <Text>Settings</Text>
        <Button
          title="Go to Settings"
          onPress={() => console.log("go")}
        />
      </View>
  
    )

}