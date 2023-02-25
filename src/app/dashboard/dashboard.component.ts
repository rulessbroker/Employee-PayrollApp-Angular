import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';
import { ResponseData } from '../response-data';
import { Observable } from 'rxjs';
import { ResponceModel } from '../response-model';
import 'hammerjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allEmployees: ResponceModel[] = [];
  employeeCount: number = 0;

  // dataSource=data.employee;
  displayedColumns: string[] = [' ','name','gender', 'department', 'salary', 'start date','actions'];

  constructor(private router: Router, private service: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  btnClick = () => {
    this.router.navigateByUrl('/form');
  };

  getAllEmployees() {
    this.service.getAllEmployees().subscribe((responce) => {
      console.log("data= ", responce.data);
      this.allEmployees = responce.data;
      this.employeeCount = this.allEmployees.length;
    });
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployeeById(id).subscribe((response) => {
      alert("deleted employee " + response.data);
      this.ngOnInit();
    })
  }

  editEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}

  // let data:any={
  //   "employee": [
  //     {
  //       "name": "Madhuri Bhosale",
  //       "gender": "male",
  //       "departMent": [
  //         "HR","engineering"
  //       ],
  //       "salary": "30000",
  //       "startDate": "1 Jan 2020",
  //       "notes": "",
  //       "id": 8380810002145,
  //       "profileUrl": "../assets/profile-images/Ellipse 1.png"
  //     },
  //     {
  //       "name": "Swamini mane",
  //       "gender": "male",
  //       "departMent": [
  //         "HR"
  //       ],
  //       "salary": "30000",
  //       "startDate": "1 Jan 2020",
  //       "notes": "",
  //       "id": 83808100021564,
  //       "profileUrl": "../assets/profile-images/Ellipse 1.png"
  //     },
  //     {
  //       "name": "Rajendar Singh",
  //       "gender": "male",
  //       "departMent": [
  //         "HR"
  //       ],
  //       "salary": "30000",
  //       "startDate": "1 Jan 2020",
  //       "notes": "",
  //       "id": 1604589699566,
  //       "profileUrl": "../assets/profile-images/Ellipse -3.png"
  //     },
  //     {
  //       "name": "Sharad Talapade",
  //       "gender": "male",
  //       "departMent": [
  //         "HR"
  //       ],
  //       "salary": "30000",
  //       "startDate": "1 Jan 2020",
  //       "notes": "",
  //       "id": 1604589731061,
  //       "profileUrl": "../assets/profile-images/Ellipse -3.png"
  //     }
  //   ]
  // }

