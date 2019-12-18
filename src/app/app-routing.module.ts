import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  {
    path: 'Home',
    component: HomeContainerComponent
  },
  {
    path: '',
    component: HomeContainerComponent
  },
  {
    path: 'Order',
    component: OrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
