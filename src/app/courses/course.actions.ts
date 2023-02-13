import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
  "[Courses Resolver] Load All Courses"
);

export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All Courses are Loaded",
  props<{ courses: Course[] }>()
);

// action for the updating of the course
export const courseUpdate = createAction(
  "[Edit course Dialog] course updated",
  props<{ update: Update<Course> }>()
);
