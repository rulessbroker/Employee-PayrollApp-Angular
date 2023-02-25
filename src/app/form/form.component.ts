import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  id: any = this.route.snapshot.paramMap.get("id");
  

  employee: EmployeeModel = {
    'name': "",
    'department': [],
    'profilePic': "",
    'gender': "",
    'salary': 0,
    'startDate': null,
    'notes': "",
  };

  constructor(private router: Router, private service: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.service.getEmployeeById(this.id).subscribe((responce) => {
        this.employee = responce.data;
        console.log(responce);
        this.showSlectedDepartments(this.employee.department);
      });
    }
  }

  onCancel = () => {
    this.router.navigateByUrl('/dashboard');
  };

  addEmployee() {
    this.employee.department = this.getSelectedDepartments();
    console.log("running addEmployee method", this.employee);
    this.service.insertEmployee(this.employee).subscribe((data: any) => {
      this.router.navigate(["dashboard"]);
    });
  }

  updateEmployee() {
    this.employee.department = this.getSelectedDepartments();
    console.log("running updateEmployee method", this.employee);
    this.service.updateEmployee(this.employee, this.id).subscribe((data: any) => {
      this.router.navigate(["dashboard"]);
    });
  }

  getSelectedDepartments() {
    let allItems = document.querySelectorAll(".checkbox");
    let selectedItems: any = [];
    allItems.forEach((item: any) => {
      if (item.checked) {
        selectedItems.push(item.value);
      }
    });
    return selectedItems;
  }

  showSlectedDepartments(selectedItems: any) {
    let allItems = document.querySelectorAll(".checkbox");
    allItems.forEach((item: any) => {
      item.checked = false;
    });
    selectedItems.forEach((selectedItem: any) => {
      allItems.forEach((item: any) => {
        if (item.value == selectedItem) {
          item.checked = true;
        }
      });
    })
  }

  resetForm() {
    this.employee = {
      'name': "",
      'department': [],
      'profilePic': "",
      'gender': "",
      'salary': 0,
      'startDate': null,
      'notes': "",
    };
    this.showSlectedDepartments([""]);
  }

  
}
