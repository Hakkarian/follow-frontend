const { createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchUsere, updateFollowinge } = require("redux/service/api/userApi");

export const fetchUser = createAsyncThunk('users/fetchUsers', async (_, {rejectWithValue}) => {
    try {

        const result = await fetchUsere();

        return result;
    } catch ({response}) {
        rejectWithValue(response)
    }
})

export const updateFollowing = createAsyncThunk(
  "users/updateFollow",
  async (data, { rejectWithValue }) => {
    try {
      const result = await updateFollowinge(data);

      return result;
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);