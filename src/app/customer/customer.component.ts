import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Customer } from '../app.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  Add() {

    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
}
