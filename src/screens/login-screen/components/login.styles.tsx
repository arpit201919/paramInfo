import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import scale, { verticalScale } from "../../../utils/scale";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    keyboardView: {
        flexGrow: 1,
        justifyContent: "center"
    },
    viewStyle: {
        marginHorizontal: scale(20),
    },
    loginText: {
        fontSize: 30,
        fontWeight: "800",
        color: colors.yellow,
        marginBottom: scale(25)
    },
    buttonCont: {
        backgroundColor: colors.yellow,
        height: verticalScale(52),
        marginTop: verticalScale(30),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    buttonText: {
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: colors.white
    }
})