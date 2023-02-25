import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseData } from "./response-data";
import { Observable } from 'rxjs';
import { identifierName } from "@angular/compiler";
import { EmployeeModel } from "./EmployeeModel";


@Injectable({
    providedIn: "root"
})
export class EmployeeService {

    server_url: string = "http://localhost:8080/";

    constructor(private http: HttpClient) { }

    getEmployeeById(id: any) {
        return this.http.get<any>(this.server_url + "employeepayrollapp/get/" + id);
    }

    getAllEmployees() {
        return this.http.get<ResponseData>(this.server_url + "employeepayrollapp/get/all");
    }
    
    insertEmployee(employee: any) {
        return this.http.post(this.server_url + "employeepayrollapp/create", employee);
    }

    deleteEmployeeById(id: number) {
        return this.http.delete<ResponseData>(this.server_url + "employeepayrollapp/delete/" + id);
    }

    updateEmployee(employee: EmployeeModel, id: any) {
        return this.http.put<ResponseData>(this.server_url + "employeepayrollapp/update/" + id, employee);
    }
}