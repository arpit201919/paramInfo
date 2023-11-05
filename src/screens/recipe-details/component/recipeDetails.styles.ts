import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import scale, { verticalScale } from "../../../utils/scale";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: scale(20),
        paddingTop: verticalScale(35)
    },
    view: {
        justifyContent: "center",
        flex: 1
    },
    imageStyle: {
        height: verticalScale(150),
        width: "100%",
        marginVertical: verticalScale(6),
        borderRadius: 6
    },
    titleText: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "800"
    },
    details: {
        fontSize: 18,
        color: colors.black,
        fontStyle: "italic",
        fontWeight: "600",
        letterSpacing: 1
    }
})