import dados from "@/assets/constants/mock";
import { Header } from "@/components/header";
import { Item } from "@/components/item";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  const voltar = () => {
    router.push("/");
  };

  const proximo = () => {
    router.pull("/");
  };

  return (
    <>
      <Header image={require("@/assets/images/flores-logo.png")} />
      <View>
        <TouchableOpacity onPress={voltar}>
          <Text style={s.backBtn}>⬅️</Text>
          <TouchableOpacity onPress={proximo}>
            <Text style={s.nextBtn}>➡️</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={s.wrapList}>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item
              name={item.nome}
              age={item.idade}
              image={item.imagem}
              date={item.nascimento}
            />
          )}
        ></FlatList>
      </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  wrapList: {
    flex: 1,
  },
  backBtn: {
    fontSize: 40,
    position: "absolute",
    top: -400,
  },
  nextBtn: {
    fontSize: 40,
    position: "absolute",
    top: -350,
  },
});
