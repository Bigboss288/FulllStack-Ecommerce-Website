import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState:{
        user : null
    },
    reducers:{
        login : (state,action) => {
            state.user = action.payload
        },
        logout : (state) => {
            state.user = null
        },
    }
})

export const { login,logout } =userSlice.actions
export default userSlice.reducer

// const userSlice = createSlice({
//     name:"user",
//     initialState:{
//         currentUser : null,
//         isFetching : false,
//         error : false
//     },
//     reducers: {
//         loginStart : (state)=>{
//             state.isFetching=true
//         },
//         loginSuccess : (state,action)=>{
//             state.isFetching=false;
//             state.currentUser=action.payload
//         },
//         loginFailure : (state)=>{
//             state.isFetching=false;
//             state.error=true
//         }
//     },
// })

// export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
// export default userSlice.reducer;


