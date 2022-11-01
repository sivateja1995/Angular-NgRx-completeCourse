import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../common/material/material.module';

export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, CourseComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(coursesRoutes)],
})
export class CoursesModule {}
