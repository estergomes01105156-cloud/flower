import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>Tela inicial</Text>
          <Text style={s.paragraph}>
            {" "}
            Meu primeiro APP usando react-native e expo.
          </Text>
        </View>
        <View style={s.body2}>
          <Image source={require("../assets/images/react-logo.png")} />
        </View>
        <View style={s.body2}>
          <TouchableOpacity style={s.btn}>
            <Text style={s.btnText}>Ir para lista</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  body: {
    backgroundColor: "#116372",
    gap: 25,
  },
  body2: {
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
    padding: 20,
  },
  paragraph: {
    color: "gray",
    textAlign: "center",
    fontSize: 22,
    paddingBottom: 15,
  },
  btn: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: "#08a6b1",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#04383f",
    borderRadius: 999,
  },
  btnText: {
    color: "#000000",
    fontSize: 22,
  },
});
