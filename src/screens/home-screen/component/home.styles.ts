import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import scale, { verticalScale } from "../../../utils/scale";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: scale(20)
    },
    headerCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: verticalScale(46),
        marginVertical: verticalScale(10),


    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: verticalScale(46),
    },
    plusCont: {
        backgroundColor: colors.yellow,
        borderRadius: scale(20),
        padding: 2
    },
    item: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 6,
        marginVertical: verticalScale(10),
        padding: verticalScale(12)
    },
    saveCont: {
        backgroundColor: colors.yellow,
        paddingVertical: verticalScale(4),
        paddingHorizontal: scale(12),
        borderRadius: 8
    },
    saveText: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.black
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "800"
    },
    imageStyle: {
        height: verticalScale(110),
        width: "100%",
        marginVertical: verticalScale(6),
        borderRadius: 6
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 6,
        height: verticalScale(45),
        paddingHorizontal: scale(10),
        fontSize: 16,
        color: colors.black
    },
})