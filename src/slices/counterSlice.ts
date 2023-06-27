import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CounterState {
    value: number;
    error: string
}

const initialState: CounterState = {
    value: 0,
    error: ''
}

export const getRandom: any = createAsyncThunk(
    'counter/getRandom',
    async (_, { rejectWithValue }) => {
        try {
            const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';
            const res = await axios.get(url);
            return res.data;    
        }
        catch(e) {
            console.log(e);
            return rejectWithValue;
        }
    }
);

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementa(state) {
            state.value += 1
        },
        decrementa(state) {
            state.value -= 1
        },
        aumenta(state, action) {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRandom.pending, (state, action) => {
            // ....
        })
        builder.addCase(getRandom.fulfilled, (state, action) => {
            state.value += action.payload
        })
    }
});

console.log(counterSlice);

export const { incrementa, decrementa, aumenta } = counterSlice.actions;

export const selectCounter = (state: any) => state.counter.value;

export default counterSlice.reducer

