import { createSlice } from "@reduxjs/toolkit"


export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },

    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
                
            }
        },

        // lma ados 3la next ywdeny page altnya
        // mlhash action hya htzwd wa7d lw7dha

        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        /** htkhleny lma akhls awl quiz a3ed nfs elkhtwat mtgblesh /main w /result bss */
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})


export const { startExamAction , moveNextAction , movePrevAction , resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;