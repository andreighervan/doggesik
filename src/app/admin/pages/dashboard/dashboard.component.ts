import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { UsersService } from '../../../users/services/users.service';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  statistics = [];
  endsubs$: Subject<any> = new Subject();

  constructor(
    private userService: UsersService,
    private productService: ProductsService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.coreService.setComponentState(false)
    combineLatest([
      this.productService.getProductsCount(),
      this.userService.getUsersCount()
    ])
      .pipe(takeUntil(this.endsubs$))
      .subscribe((values) => {
        this.statistics = values;
      });
  }

  ngOnDestroy() {
    this.endsubs$.next();
    this.endsubs$.complete();
  }
}
