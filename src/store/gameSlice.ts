import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    userChoice: "",
    waitOpponent: false,
    computer: Math.random(),
    computerChoice: "",
    isLoading: true,
    message: "",
    score: 0,
    computerScore: 0,
    isShowResult: false
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        getSelectedElement(state, action: PayloadAction<string>){
            state.userChoice = action.payload
            state.isLoading = true

        },
        toggleWaitOpponent(state, action: PayloadAction<boolean>){
            state.waitOpponent = action.payload
            state.message = ""
        },
        getSelectedComputer(state, action: PayloadAction<string>){
            state.computerChoice = action.payload
            state.isLoading = false
        },
        setMessage(state, action: PayloadAction<string>){
            state.message = action.payload
        },
        setScore(state){
            state.score = state.score + 1
        },
        setScoreComputer(state){
            state.computerScore++
        },
        toggleShowResult(state, action: PayloadAction<boolean>){
            state.isShowResult = action.payload
        }

    }
})
export const {
    getSelectedElement,
    toggleWaitOpponent,
    getSelectedComputer,
    setMessage,
    setScore,
    setScoreComputer} = gameSlice.actions;
export default gameSlice.reducer