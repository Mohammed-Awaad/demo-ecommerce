import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, AfterViewInit {
  categoryList: ICategory[];
  selectedCategoryId: number = 0;
  orderTotalPrice: number = 0;

  /*
    nameInput: ElementRef|undefined = undefined;
    nameInput: ElementRef | null = null;
    nameInput: ElementRef = {} as ElementRef;
    nameInput?: ElementRef; //Optional save navigation
  */
  // Best brackets
  @ViewChild('clientName') nameInput!: ElementRef; //Non-null assertion operator
  // Access any Public properties or methods in child
  @ViewChild('productComponent') productListComponent!: ProductComponent;

  constructor() {
    this.categoryList = [
      { id: 10, name: 'Mobiles' },
      { id: 24, name: 'Laptops' },
      { id: 17, name: 'Cameras' },
      { id: 29, name: 'Monitors' },
      { id: 70, name: 'Clothes' },
      { id: 11, name: 'iPads' },
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.nameInput.nativeElement.value = 'Mohamed Awaad';
    // this.nameInput.nativeElement.style.borderColor = '#ff0000';
    // console.log(this.productListComponent.productList);
  }

  onTotalPriceChanged(totalPrice: number): void {
    this.orderTotalPrice = totalPrice;
  }
}
