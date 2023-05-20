import { Injectable } from '@angular/core';
import { Student } from '../Entites/student';
import { Course } from '../Entites/course';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {
  StudentData:Student [] = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      var student = new Student();
      student.name = 'Student ' + i;
      student.id = i;
      student.phone = 'phone ' + i;
      student.address = 'address ' + i;
      for (let i = 0; i < 3; i++) {
        var course = new Course();
        course.Title = 'Course ' + i;
        course.Description = 'description ' + i;
        student.Courses.push(course);
      }
      this.StudentData.push(student);
    }
   
   }
}

interface StData {
  
}
