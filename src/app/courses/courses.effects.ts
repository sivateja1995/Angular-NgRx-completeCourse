import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import * as CourseActions from "../courses/course.actions";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap((action) => this.coursesHttpServices.findAllCourses()),
      map((courses) => CourseActions.allCoursesLoaded({ courses }))
    )
  );

  saveCourse$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CourseActions.courseUpdate),
      concatMap(action => this.coursesHttpServices.saveCourse(
        action.update.id,
        action.update.changes
      ))
    ),
    {dispatch:false}
  )

  constructor(
    private actions$: Actions,
    private coursesHttpServices: CoursesHttpService
  ) {}
}
