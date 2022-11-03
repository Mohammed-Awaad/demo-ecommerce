import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/models/view-models/store';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  storeInfo: Store;
  showHideImg: boolean = true;

  private subscriptions: Subscription[] = [];

  constructor(private adsService: AdsService) {
    this.storeInfo = new Store('Demo Store', 'https://picsum.photos/seed/picsum/1400/500', ['Cairo', 'Alex', 'Sohag', 'Qena']);
  }

  ngOnInit(): void {
    const adsSubscription = this.adsService.getScheduledAds(3).subscribe({
      next: (data: string) => {
        console.log(data);
      },
      error: (err: Error) => {
        console.log(err);
      },
      complete: () => {
        console.log('Done!');
      },
    });

    this.subscriptions.push(adsSubscription);
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  toggleImg() {
    return (this.showHideImg = !this.showHideImg);
  }
}
