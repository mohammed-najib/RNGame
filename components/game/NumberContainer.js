import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import Colors from "../../constants/colors";

const Numbercontainer = ({ children }) => {
  const { width, height } = useWindowDimensions();

  const fontSizeUsed = height < 380 || width < 380 ? 28 : 38;

  return (
    <View style={[styles.container]}>
      <Text style={[styles.numberText, { fontSize: fontSizeUsed }]}>
        {children}
      </Text>
    </View>
  );
};

export default Numbercontainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
