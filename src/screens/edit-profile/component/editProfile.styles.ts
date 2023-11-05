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
        height: verticalScale(100),
        width: scale(100),
        alignSelf: "center",
        marginTop: verticalScale(10)
    },
    logoutBotton: {
        backgroundColor: colors.red,
        width: scale(100),
        height: verticalScale(40),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: verticalScale(20),
        borderRadius: 6
    },
    logout: {
        fontSize: 17,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.white
    },
    userName: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.black,
        marginTop: verticalScale(10)
    },
    savedData: {
        marginTop: verticalScale(20),
        fontSize: 22,
        fontWeight: "bold",
        color: colors.black,
    },
    itemCont: {
        backgroundColor: colors.yellow,
        borderWidth: 1,
        padding: scale(15),
        marginVertical: verticalScale(15),
        borderRadius: 8
    },
    desc: {
        fontSize: 15,
        color: colors.black,
        fontWeight: "600",
        marginVertical: verticalScale(10)
    }
})