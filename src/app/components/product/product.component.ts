import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges {
  productList: IProduct[] = [];
  date: Date;

  orderTotalPrice: number = 0;
  @Input() selectedCategoryId: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;

  constructor(private prodService: ProductsService, private router: Router) {
    this.date = new Date();

    this.totalPriceChanged = new EventEmitter<number>();
  }

  ngOnChanges(): void {
    this.productList = this.prodService.getProductsByCategoryID(this.selectedCategoryId);
  }

  ngOnInit(): void {
    this.productList = this.prodService.getAllProducts();
  }

  trackById(index: number, prod: IProduct): number {
    return prod.id;
  }

  buy(price: number, count: number): void {
    this.orderTotalPrice += count * price;

    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  openProductDetails(id: number): void {
    this.router.navigateByUrl(`products/${id}`);
  }
}
