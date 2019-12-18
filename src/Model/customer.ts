import { Order } from './order';

export class Customer {
    customerId: number;
    customerName: string;
    isNewCustomer: boolean;
    customerOrder: Array<Order>;
 }
