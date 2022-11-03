import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  private adsList: string[];
  constructor() {
    this.adsList = ['Sales', 'Big Discounts', 'Sale Up To 50%', 'Checkout Our White Friday Offers', 'Special White Friday Offers Up To 70%'];
  }

  getScheduledAds(intervalBySeconds: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      const adsTimer = setInterval(() => {
        if (counter == this.adsList.length) observer.complete();
        if (this.adsList[counter] == '') observer.error({ error: 'Empty Ad!' });
        observer.next(this.adsList[counter++]);
      }, intervalBySeconds * 1000);
      return {
        unsubscribe() {
          clearInterval(adsTimer);
          console.log('Unsubscribed');
        },
      };
    });
  }
}
