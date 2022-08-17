import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MediaMatcher } from '@angular/cdk/layout';
// import { selectIsOrdersHeadersLoading } from 'src/app/modules/order-search/state/order.reducer';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent implements OnInit {
  public sidebaropen = true;
  public isLoading$: Observable<boolean> | undefined;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    private store: Store,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
   // setTimeout(() => (this.isLoading$ = this.store.select(selectIsLoading)));
    // setTimeout(
    //   () => (this.isLoading$ = this.store.select(selectIsOrdersHeadersLoading))
    // );

    //this.sidebaropen = !this.mobileQuery.matches;
  }

  sideBarToggler() {
    //this.sidebaropen = !this.sidebaropen;
  }
}

