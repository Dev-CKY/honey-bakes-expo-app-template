import arrowRight from "@/src/assets/icons/svg/arrowRight";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import styles from "../../styles/components/routes.styles";

const Routes = ({ data = [] }: { data?: any[] }) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <View key={index} style={styles.wrapper}>
          <Pressable onPress={item.onPress} style={styles.row}>
            <View style={styles.leftRow}>
              <View style={styles.iconContainer}>
                <SvgXml xml={item.icon} width={24} height={24} />
              </View>

              <Text style={styles.title}>{item.routeName}</Text>
            </View>

            <SvgXml xml={arrowRight} width={24} height={24} />
          </Pressable>
        </View>
      ))}
    </>
  );
};

export default Routes;
