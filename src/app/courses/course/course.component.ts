import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, withLatestFrom, tap, delay } from 'rxjs';
import { Course } from '../model/course.model';
import { Lesson } from '../model/lesson.model';
import { CourseEntityService } from '../service/course-entity.service';
import { LessonEntityService } from '../service/lesson-entity.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  course$: Observable<Course> | undefined;
  loading$: Observable<boolean>;
  lessons$: Observable<Lesson[]>;

    displayedColumns = ['seqNo', 'description', 'duration'];

    nextPage = 0;

    constructor(
        private coursesService: CourseEntityService,
        private lessonsService: LessonEntityService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {

        const courseUrl = this.route.snapshot.paramMap.get('courseUrl');

        this.course$ = this.coursesService.entities$
            .pipe(
                map(courses => courses.find(course => course.url == courseUrl))
            );

        this.lessons$ = this.lessonsService.entities$
            .pipe(
                withLatestFrom(this.course$),
                tap(([lessons, course]) => {
                    if (this.nextPage == 0) {
                        this.loadLessonsPage(course);
                    }
                }),
                map(([lessons, course]) =>
                    lessons.filter((lesson:any) => lesson.courseId == course.id))
            );

        this.loading$ = this.lessonsService.loading$.pipe(delay(0));

    }

    loadLessonsPage(course: Course) {
        this.lessonsService.getWithQuery({
            'courseId': course.id.toString(),
            'pageNumber': this.nextPage.toString(),
            'pageSize': '3'
        });

        this.nextPage += 1;

    }


}
