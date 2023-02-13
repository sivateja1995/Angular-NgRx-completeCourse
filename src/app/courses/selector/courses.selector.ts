import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "../reducers/courses.reducer";
import * as fromCourses from "../reducers/courses.reducer"

export const selectCoursesState = createFeatureSelector<CourseState>("courses");

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
)

// for the beginners courses
export const selectBeginningCourses = createSelector(
  selectAllCourses,
  courses=>courses.filter(course=>course['category']=='BEGINNER')
);


// for advanced courses
export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses=>courses.filter(course=>course['category']=='ADVANCED')
);


//  for the pormo total
export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(courses=> courses.promo == true).length
)

// for the know courses loaded or not 
export const areCoursesLoaded = createSelector(
  selectCoursesState,
  state => state.allCoursesLoaded
);
