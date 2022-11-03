import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productList: IProduct[];

  constructor() {
    this.productList = [
      {
        id: 51,
        name: 'Samsung S21',
        quantity: 0,
        price: 500,
        img: 'https://m.media-amazon.com/images/I/51LO8hNVdES._AC_UL320_.jpg',
        categoryID: 10,
      },
      {
        id: 53,
        name: 'Xiaomi 11T',
        quantity: 30,
        price: 250,
        img: 'https://m.media-amazon.com/images/I/61RtZ8HMIYL._AC_UL320_.jpg',
        categoryID: 10,
      },
      {
        id: 55,
        name: 'iPhone 13',
        quantity: 2,
        price: 550,
        img: 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_UL320_.jpg',
        categoryID: 10,
      },
      {
        id: 607,
        name: 'Dell Vostro 3510',
        quantity: 13,
        price: 300,
        img: 'https://m.media-amazon.com/images/I/81Gphn97m9L._AC_UL320_.jpg',
        categoryID: 24,
      },
      {
        id: 609,
        name: 'HP 255 G8',
        quantity: 20,
        price: 180,
        img: 'https://m.media-amazon.com/images/I/81QGhmhCNuL._AC_UL320_.jpg',
        categoryID: 24,
      },
      {
        id: 611,
        name: 'Appel Mac Pro',
        quantity: 1,
        price: 900,
        img: 'https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL320_.jpg',
        categoryID: 24,
      },
      {
        id: 820,
        name: 'Canon PowerShot SX430',
        quantity: 0,
        price: 340,
        img: 'https://m.media-amazon.com/images/I/51cWcTUvdXL._AC_UL320_.jpg',
        categoryID: 17,
      },
      {
        id: 822,
        name: 'Nikon Coolpix B600',
        quantity: 6,
        price: 350,
        img: 'https://m.media-amazon.com/images/I/71PGIEJq8cL._AC_UL320_.jpg',
        categoryID: 17,
      },
      {
        id: 824,
        name: 'Canon EOS 4000D',
        quantity: 20,
        price: 400,
        img: 'https://m.media-amazon.com/images/I/51OFKsSV9IL._AC_UL320_.jpg',
        categoryID: 17,
      },
      {
        id: 109,
        name: 'SAMSUNG 24',
        quantity: 30,
        price: 165,
        img: 'https://m.media-amazon.com/images/I/81gS2X1cUGL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        categoryID: 29,
      },
      {
        id: 111,
        name: 'Acer EZ321Q',
        quantity: 17,
        price: 170,
        img: 'https://m.media-amazon.com/images/I/71Kaz6cnpeL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        categoryID: 29,
      },
      {
        id: 112,
        name: 'LG 32ML600M',
        quantity: 10,
        price: 200,
        img: 'https://m.media-amazon.com/images/I/91-JJJDtMvL._AC_SX679_.jpg',
        categoryID: 29,
      },
      {
        id: 70,
        name: 'ZENTHACE  Sherpa',
        quantity: 10,
        price: 49,
        img: 'https://m.media-amazon.com/images/I/71cV8S6vQrL._AC_UX466_.jpg',
        categoryID: 70,
      },
      {
        id: 56,
        name: 'iPad Air Wi-Fi 256GB',
        quantity: 0,
        price: 749,
        img: 'https://m.media-amazon.com/images/I/61n8OIysgKL._AC_SX522_.jpg',
        categoryID: 11,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getProductByID(id: number): IProduct | null {
    const foundProduct = this.productList.find((prod) => prod.id == id);
    if (foundProduct) return foundProduct;
    else return null;
  }

  getProductsByCategoryID(catID: number): IProduct[] {
    if (catID == 0) return this.productList;
    else return this.productList.filter((prod) => prod.categoryID == catID);
  }

  getAllProductsID() {
    return this.productList.map((prod) => prod.id);
  }
}
