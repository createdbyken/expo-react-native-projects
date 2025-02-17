import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  // console.log(params);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-5">
      <Text className="font-helve-black text-2xl">{product.title}</Text>
      <Text className="font-helve-medium mt-3">{product.description}</Text>
      <Text className="font-helve-black mt-3">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
