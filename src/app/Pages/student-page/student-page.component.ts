import { Component } from '@angular/core';
import { Student } from 'src/app/Models/Entites/student';
import { StudentsDataService } from 'src/app/Models/Services/students-data.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {

  student = new Student();

  // Data form student Service
  myStData:Student [] =[];

  constructor(stData:StudentsDataService){
    this.myStData = stData.StudentData;
  }
}

@Component({
  selector: 'app-student-table-page',
  templateUrl: './student-Table-page.html',
  
})
export class StudentTablePageComponent {
  displayedColumns: string[] = ['name', 
    'id', 'phone', 'address', 'dateOfBirth', 
    'courses'];

    constructor(public stData: StudentsDataService){}
}