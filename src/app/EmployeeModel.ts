type Nullable<T> = T | null;

export class EmployeeModel{
    name:String = "";
    department :String[] = [];
    profilePic:String = "";
    gender:String = "";
    salary:number = 0;
    startDate:Nullable<Date>;
    notes:String = "";

    constructor(name:String, department:String[], profilePic:String, gender:String, salary:number, startDate:Date, notes:String){
        this.name=name;
        this.department=department;
        this.profilePic=profilePic;
        this.gender=gender;
        this.salary=salary;
        this.startDate=startDate;
        this.notes=notes;
    }
}