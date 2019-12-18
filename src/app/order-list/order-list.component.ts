import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-service.service';
import { Customer } from 'src/Model/customer';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  customers: any;

  constructor(public customerService: CustomerService ) { }

  ngOnInit() {
    this.loadCustomers();
  }

  // Get employees list
  loadCustomers() {
    return this.customerService.getCustomers().subscribe((customerData: {}) => {
      console.log(customerData);
      this.customers = customerData;
    });
  }
}
