import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    active_task: {},
    last_index_of_task_todo: null,
    last_index_of_task_inProgress: null,
    last_index_of_task_inPriority: null,
    last_index_of_task_done: null,
    active_link: "Todo",
  },
  reducers: {
    activeTask: (state, action) => {
      state.active_task = action.payload;
    },
    lastIndexOfTaskTodo: (state, action) => {
      state.last_index_of_task_todo = action.payload;
    },
    activeLink: (state, action) => {
      state.active_link = action.payload;
    },
  },
});

export const { activeTask, lastIndexOfTaskTodo, activeLink } =
  taskSlice.actions;
export const taskDataInStore = (state) => state.task;
export default taskSlice.reducer;
