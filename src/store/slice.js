import { createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../utils/axios"
import { customData } from "../utils/customData"


const initialState = {
    isLoggedIn: false,
    recipeList: customData,
    currentUser: {},
    userData: [],
    userDetails: []
}

export const recipeSlice = createSlice({
    name: "recipeList",
    initialState: initialState,
    reducers: {
        addNewRecipeList: (state, action) => {
            state.recipeList = action.payload
        },
        addUser: (state, action) => {
            state.userDetails?.push(action?.payload);
            state.currentUser = action.payload
            state.isLoggedIn = true
            console.log("====>>>>", state?.userDetails);
        },
        saveRecipe: (state, action) => {
            state.userDetails = action.payload
            console.log("save====>>>>", state?.userDetails);
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    }
})

export const {
    addNewRecipeList,
    addUser,
    saveRecipe,
    logout
} = recipeSlice.actions

// export const callGetCountryApi = () => async (dispatch) => {
//     try {
//         const response = await axiosInstance.get("/all")
//         dispatch(addCountry(response.data))
//     } catch (error) {
//         console.log(error);
//     }
// }

export default recipeSlice.reducer