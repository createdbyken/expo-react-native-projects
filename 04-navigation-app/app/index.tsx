import { Link, Redirect } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const App = () => {
  return <Redirect href="./(stack)/home" />;
  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-4xl font-helve-black text-primary">
  //         Hola Mundo
  //       </Text>
  //       <Text className="text-3xl font-helve-medium text-secondary-200">
  //         Severance
  //       </Text>
  //       <Text className="text-2xl font-helve-light text-secondary-100">
  //         Hola Mundo
  //       </Text>
  //       <Text className="text-xl text-tertiary">Severance</Text>
  //     </View>
  //     <Link href="/products">
  //       <Text>Products</Text>
  //     </Link>
  //   </SafeAreaView>
  // );
};

export default App;
