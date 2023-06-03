const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchUsere } = require("redux/service/api/userApi");

export const fetchUser = createAsyncThunk('users/fetchUsers', async (_, {rejectWithValue}) => {
    try {
        console.log('here')
        const result = await fetchUsere();
        console.log('oper user', result);
        return result;
    } catch ({response}) {
        rejectWithValue(response)
    }
})