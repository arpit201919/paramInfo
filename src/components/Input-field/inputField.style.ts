import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"
import scale, { verticalScale } from "../../utils/scale"

export const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '600',
        marginBottom: verticalScale(3)
    },
    input: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 6,
        height: verticalScale(45),
        backgroundColor: colors.yellow,
        paddingHorizontal: scale(10),
        fontSize: 16,
        color: colors.grey
    },
    errorText: {
        color: colors.red,
        fontSize: 15,
        fontWeight: "600"
    },
    inputContainer: {
        marginBottom: verticalScale(10)
    }
})