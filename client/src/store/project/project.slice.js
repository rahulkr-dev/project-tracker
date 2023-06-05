import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  changeStatus,
  createProject,
  getProject,
  sortProject,
} from "./project.api";
import { searchProject } from "./project.api";
const initialState = {
  loading: false,
  error: null,
  newProjectAdded: false,
  projectList: {},
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

// in payload we are sending page and limit in the obj
export const getProjectByUser = createAsyncThunk(
  "/project/get",
  async (payload) => {
    let res = await getProject(payload);
    return res.data;
  }
);

// inside payload we send id and body->status:""
export const changeStatusByUser = createAsyncThunk(
  "/project/change/status",
  async (payload) => {
    let res = await changeStatus(payload);
    return res.data;
  }
);

// search query
export const searchByUser = createAsyncThunk(
  "/project/search/user",
  async (query) => {
    let res = await searchProject(query);
    return res.data;
  }
);

// sort project data
export const sortBasedOnValue = createAsyncThunk(
  "/project/sort/user",
  async (payload) => {
    let res = await sortProject(payload);
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
        state.projectList = action.payload;
      })
      .addCase(getProjectByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(changeStatusByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeStatusByUser.fulfilled, (state, action) => {
        state.loading = false;
        const receivedProject = action.payload; // Assuming the received object is stored in action.payload

        // Find the index of the project in the results array based on its _id
        const index = state.projectList.results.findIndex(
          (project) => project._id === receivedProject._id
        );

        if (index !== -1) {
          // If the project is found, update the result field
          state.projectList.results[index] = receivedProject;
        }
      })
      .addCase(changeStatusByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload;
      })
      .addCase(searchByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sortBasedOnValue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sortBasedOnValue.fulfilled, (state, action) => {
        state.loading = false;
        state.projectList = action.payload;
      })
      .addCase(sortBasedOnValue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
