import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../model/course.model';
import { CourseEntityService } from '../service/course-entity.service';
import { defaultDialogConfig } from '../shared/default-dialog-config';
import {EditCourseComponentComponent} from "../edit-course-component/edit-course-component.component";

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
    courses: Course[];

    @Output()
    courseChanged = new EventEmitter();

    constructor(
      private dialog: MatDialog,
      private courseService: CourseEntityService) {
    }

    ngOnInit() {

    }

    editCourse(course:Course) {

        const dialogConfig = defaultDialogConfig();

        dialogConfig.data = {
          dialogTitle:"Edit Course",
          course,
          mode: 'update'
        };

        this.dialog.open(EditCourseComponentComponent, dialogConfig)
          .afterClosed()
          .subscribe(() => this.courseChanged.emit());

    }

  onDeleteCourse(course:Course) {

        this.courseService.delete(course)
            .subscribe(
                () => console.log("Delete completed"),
                err => console.log("Deleted failed", err)
            );


  }

}
