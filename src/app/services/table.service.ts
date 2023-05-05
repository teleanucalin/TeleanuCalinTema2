import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  employees:Employee[]=[
    {
    id:1,
    name:"John Smith",
    email:"john.smith@example.com",
    department:"Sales",
    jobTitle:"Sales Associate",
    age:27
  },
  {
    id:1,
    name:"Sarah Johnson",
    email:"sarah.johnson@example.com",
    department:"Human Resources",
    jobTitle:"HR Manager",
    age:35
  },
  {
    id:1,
    name:"Robert Lee",
    email:"robert.lee@example.com",
    department:"Finance",
    jobTitle:"Financial Analyst",
    age:29
  },
  {
    id:1,
    name:"John Smith",
    email:"maria.hernandez@example.com",
    department:"Marketing",
    jobTitle:"Marketing Coordinator",
    age:31
  }
];
  
  constructor() { }

  getAllEmployees():Employee[]{
    return this.employees;
  }

  updateEmployee(employee:Employee){
    let employeeToUpdate=this.employees.find(x=>x.id==employee.id);
    employeeToUpdate=employee;
  }

}
