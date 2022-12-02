import React from "react";
import { View, Text, ScrollView, Image, ViewComponent } from "react-native";

export default function start() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../../assets/icons/logo.png")} />
          <Text>
            Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o
            melhor nivel.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
