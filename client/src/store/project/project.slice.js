import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProject, getProject } from "./project.api";

const initialState = {
  loading: false,
  error: null,
  newProjectAdded:false,
  projectList:[]
};

export const createProjectByUser = createAsyncThunk(
  "project/create",
  async (payload) => {
    try {
      let res = await createProject(payload);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getProjectByUser = createAsyncThunk(
  "/project/get",
  async () => {
    let res = await getProject();
    return res.data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProjectByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.newProjectAdded = false;
      })
      .addCase(createProjectByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.newProjectAdded = true;
      })
      .addCase(createProjectByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProjectByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(getProjectByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
