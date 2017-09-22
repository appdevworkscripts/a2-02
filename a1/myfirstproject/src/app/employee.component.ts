import {Component} from '@angular/core';
import {Employee} from './shared/employee';
@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html'
})
export class EmployeeComponent{
    employee:Employee=new Employee("Abc",40,"Sr Manager","Male");
    align="text-align:center"
}