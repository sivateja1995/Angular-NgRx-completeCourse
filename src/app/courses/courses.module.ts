import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../common/material/material.module';
import { EditCourseComponentComponent } from './edit-course-component/edit-course-component.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import { CoursesResolver } from './service/course.resolver';
import {compareLessons, Lesson} from './model/lesson.model';
import {compareCourses} from "./model/course.model";
import { CoursesDataService } from './service/courses-data.service';

export const coursesRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
      resolve: {
          courses: CoursesResolver
      }
  },
  {
      path: ':courseUrl',
      component: CourseComponent,
      resolve: {
          courses: CoursesResolver
      }
  }
];

const entityMetadata: EntityMetadataMap = {
  Course: {
      sortComparer: compareCourses,
      entityDispatcherOptions: {
          optimisticUpdate: true
      }
  },
  Lesson: {
      sortComparer: compareLessons
  }
};

@NgModule({
  declarations: [HomeComponent, CourseComponent, EditCourseComponentComponent, CoursesCardListComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(coursesRoutes)],
})
export class CoursesModule {

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private coursesDataService: CoursesDataService) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Course', coursesDataService);

}
}
