import { useRoute, useNavigation } from "@react-navigation/native"


interface useRecipeDetailsHooksProps {
    params: any
    navigation: any
}

export const useRecipeDetailsHooks = (): useRecipeDetailsHooksProps => {
    const params = useRoute().params
    const navigation = useNavigation()

    return {
        params,
        navigation
    }
}