import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


// functionality of CreateAsyncThunk (while fetching data)
// action: {type:'coin/fetch/pending', payload: undefined}
// action: {type:'coin/fetch/fulfilled', payload: data}
// action: {type:'coin/fetch/rejected', payload: error.msg}

const fetchData= createAsyncThunk(
    // 1. create action. Action: type , payload
    'coin/fetch',

    async (args, thunkAPI)=>{
        try{
              const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
              const data = await response.json();
              return data;      //data goes into the payload of the action 
            //   action: {type:'coin/fetch', payload: data}
        }
        catch(error){
                return rejectWithValue(error.msg);
        }
    }
)

const slice= createSlice({
    name:"fetchSlice",
    initialState:{data:[], loading:false, error:null},
    reducers:{},        //we left reducers section empty, because we are using async operations. So we have to use extraReducers
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true;
            state.error=null;

        }) 
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(fetchData.rejected, (state,action)=>{
            state.error=action.payload;
            state.loading=false;
        })
    }
})

export default slice.reducer;
export {fetchData};