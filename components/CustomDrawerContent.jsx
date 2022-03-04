import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { Linking } from "react-native";
import { LogoTitle } from "./LogoTitle";
export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LogoTitle style={{ margin: 20 }} />
      <DrawerItemList {...props} />
      <DrawerItem
        label={"Ayuda"}
        onPress={() => Linking.openURL("https://www.google.com")}
      />
    </DrawerContentScrollView>
  );
}
