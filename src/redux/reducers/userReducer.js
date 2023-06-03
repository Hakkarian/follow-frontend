const { createSlice } = require("@reduxjs/toolkit");
const { fetchUser } = require("redux/operations/userOperations");

const initialState = {
    users: [],
    isLoading: false,
    error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          console.log('user slice', payload)
          state.users = payload;
      })
  },
});

export default userSlice.reducer;
