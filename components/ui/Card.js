import { StyleSheet, useWindowDimensions, View } from "react-native";

import Colors from "../../constants/colors";

const Card = ({ children }) => {
  const { width, height } = useWindowDimensions();

  const marginTopDistance = height < 380 || width < 380 ? 16 : 36;

  return (
    <View style={[styles.inputContainer, { marginTop: marginTopDistance }]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow for android
    shadowColor: "black", // shadow for ios
    shadowOffset: {
      width: 0,
      height: 2,
    }, // shadow for ios
    shadowRadius: 6, // shadow for ios
    shadowOpacity: 0.25, // shadow for ios
  },
});
