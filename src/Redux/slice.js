import { createSlice } from "@reduxjs/toolkit";

const saveSlice =  JSON.parse(localStorage.getItem('slice'))
 || 
 {
    user:null,
    isAuthenticated:false
}
const slice= createSlice ({
    name:'auth',
    initialState:saveSlice,

    reducers:{
        login:(state,action)=>{ 
            const {userName} =action.payload
            state.user={userName}
                state.isAuthenticated = true,
                localStorage.setItem('slice',JSON.stringify(state))
            
        }
    }
})
    
export const { login } = slice.actions;

export default slice.reducer