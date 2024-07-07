import { createSlice } from "@reduxjs/toolkit";


export const resultReducer = createSlice ({

    name: 'result',
    initialState : {
        userId : null,
        result : []
    },
    reducers : {
        setUserId : (state, action) => {
            state.userId = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },

        //trace: bit7t feha index ==> lma ados 3la prev yrg3ny ll rkam aly ablo
        //checked: bit7t feha value bta3 result elgded lma aghiro
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : []
            }
        }
    }
})

export const {setUserId, pushResultAction, resetResultAction, updateResultAction} = resultReducer.actions;

export default resultReducer.reducer;