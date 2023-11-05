import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import scale, { verticalScale } from "../../../utils/scale";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewStyle: {
        flexGrow: 1,
    },
    mainView: {
        height: "100%",
        paddingHorizontal: scale(20),
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.black,
        textAlign: "left"
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