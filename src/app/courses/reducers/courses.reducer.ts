import { createReducer, on } from "@ngrx/store";
import { compareCourses, Course } from "../model/course";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import * as courseAction from "../course.actions";

export interface CourseState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter({
  sortComparer: compareCourses
});

export const initialState = adapter.getInitialState({allCoursesLoaded:false});

export const courseReducer = createReducer(
  initialState,
  on(courseAction.allCoursesLoaded, (state, action) =>
    adapter.addAll(action.courses, { ...state, allCoursesLoaded:true }  )
  )
);


export const {selectAll}=adapter.getSelectors()
