const { createSlice, current } = require("@reduxjs/toolkit");
const { fetchUser } = require("redux/operations/userOperations");

const initialState = {
  users: [],
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    followTweet: (state, { payload }) => {
      const selectedUser = state.users.find((user) => user._id === payload._id);
      selectedUser.followers++
      selectedUser.isFollowing = true
    },
    notFollowTweet: (state, { payload }) => {
      const selectedUser = state.users.find((user) => user._id === payload._id);
      selectedUser.followers--;
      selectedUser.isFollowing = false;
    },
  },
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
        console.log("user slice", payload);
        state.users = payload;
      });
  },
});

const { followTweet, notFollowTweet } = userSlice.actions;

export { followTweet, notFollowTweet };

export default userSlice.reducer;
