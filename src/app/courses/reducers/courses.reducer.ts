import { Course } from "../model/course";



export interface CourseState{
    entities: { [key: number]: Course },
    ids:number[],
}