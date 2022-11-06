import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';
import { CourseEntityService } from '../service/course-entity.service';

@Component({
  selector: 'app-edit-course-component',
  templateUrl: './edit-course-component.component.html',
  styleUrls: ['./edit-course-component.component.css']
})
export class EditCourseComponentComponent  {

  form: UntypedFormGroup;

  dialogTitle: string;

  course: Course;

  mode: 'create' | 'update';

  loading$: Observable<boolean>;

  constructor(
      private fb: UntypedFormBuilder,
      private dialogRef: MatDialogRef<EditCourseComponentComponent>,
      @Inject(MAT_DIALOG_DATA) data,
      private coursesService: CourseEntityService) {

      this.dialogTitle = data.dialogTitle;
      this.course = data.course;
      this.mode = data.mode;

      const formControls = {
          description: ['', Validators.required],
          category: ['', Validators.required],
          longDescription: ['', Validators.required],
          promo: ['', []]
      };

      if (this.mode == 'update') {
          this.form = this.fb.group(formControls);
          this.form.patchValue({...data.course});
      } else if (this.mode == 'create') {
          this.form = this.fb.group({
              ...formControls,
              url: ['', Validators.required],
              iconUrl: ['', Validators.required]
          });
      }
  }

  onClose() {
      this.dialogRef.close();
  }

  onSave() {

      const course: Course = {
          ...this.course,
          ...this.form.value
      };

      if (this.mode == 'update') {

          this.coursesService.update(course);

          this.dialogRef.close();
      } else if (this.mode == 'create') {

          this.coursesService.add(course)
              .subscribe(
                  newCourse => {

                      console.log('New Course', newCourse);

                      this.dialogRef.close();

                  }
              );

      }


  }


}
