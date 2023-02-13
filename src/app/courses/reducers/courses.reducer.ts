import { createReducer, on } from "@ngrx/store";
import { Course } from "../model/course";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import * as courseAction from "../course.actions";

export interface CourseState extends EntityState<Course> {}

export const adapter = createEntityAdapter();

export const initialState = adapter.getInitialState();

export const courseReducer = createReducer(
  initialState,
  on(courseAction.allCoursesLoaded, (state, action) =>
    adapter.addAll(action.courses, state  )
  )
);


export const {selectAll}=adapter.getSelectors()
