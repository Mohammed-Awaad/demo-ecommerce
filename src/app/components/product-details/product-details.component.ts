import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  currentProductID: number = 0;
  currentProduct: IProduct | null = null;
  productsIDList: number[] = [];

  subscriptions: Subscription[] = [];
  constructor(private activatedRoute: ActivatedRoute, private prodService: ProductsService, private location: Location, private router: Router) {}

  ngOnInit(): void {
    // this.currentProductID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const paramSubscription = this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentProductID = Number(paramMap.get('id'));
      this.currentProduct = this.prodService.getProductByID(this.currentProductID);
    });
    this.subscriptions.push(paramSubscription);
    this.productsIDList = this.prodService.getAllProductsID();
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  prevProduct() {
    const currentIndex = this.productsIDList.findIndex((ele) => ele == this.currentProductID);
    const prevProductID = this.productsIDList[currentIndex - 1];
    if (currentIndex > 0) this.router.navigate(['/products', prevProductID]);
  }

  nextProduct() {
    const currentIndex = this.productsIDList.findIndex((ele) => ele == this.currentProductID);
    const nextProductID = this.productsIDList[currentIndex + 1];
    if (currentIndex < this.productsIDList.length) this.router.navigate(['/products', nextProductID]);
  }
}
