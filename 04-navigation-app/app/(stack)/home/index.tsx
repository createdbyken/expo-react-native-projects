import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Products
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/profile")}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/settings")}
          className="mb-2"
          color="tertiary"
        >
          Settings
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton
            variant="text-only"
            color="primary"
            className="mb-10"
            onPress={() => router.push("/products")}
          >
            Products
          </CustomButton>
        </Link>

        {/* <Link className="mb-5" href="./products">
          Products
        </Link>
        <Link className="mb-5" href="./profile">
          Profile
        </Link>
        <Link className="mb-5" href="./settings">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
