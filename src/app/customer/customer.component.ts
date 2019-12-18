import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/services/customer-service.service';
import { Customer } from 'src/Model/customer';
import { Order } from 'src/Model/order';
import { QueryService } from 'src/services/query-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  @Output() showOrders = new EventEmitter<boolean>();
  showOrderComp = false;
  customerName: string;
  deliveryDistance: number;
  deliveryFloor: number;
  isNewCustomer = false;
  hasCoupon = false;
  showFare = false;
  totalFare: any;

  constructor(public customerService: CustomerService, public query: QueryService) { }

  ngOnInit() {
  }

  onShowOrderClick() {
    this.showOrderComp = ! this.showOrderComp;
    this.showOrders.emit(this.showOrderComp);
  }

  addCustomer() {
   const customer = new Customer();
   customer.customerId = 0;
   customer.customerName = this.customerName;
   customer.isNewCustomer = this.isNewCustomer;
   const order = new Order();
   order.distance = this.deliveryDistance;
   order.floor = this.deliveryFloor;
   order.hasCoupen = this.hasCoupon;
   order.customerId = 0;
   order.orderID = 0;
   customer.customerOrder = [ order ];
   this.customerService.addCustomer(customer);
  }

  getTotalFare() {
     this.query.getTotalDeliveryFare(this.deliveryDistance, this.deliveryFloor).subscribe((value: {}) => {
      console.log(value);
      this.totalFare = value;
    });
    // .map(data => this.totalFare = data);
     this.showFare = true;
  }

}
