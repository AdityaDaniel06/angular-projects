import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      // snapshot userful for first intialization
      //use snapshot if the the comnponent we are on never reloads from within
      id: this.route.snapshot.params['id'], // retriving id(name given in app module appRoutes) from URL
      name: this.route.snapshot.params['name'],
    };
    // subscribe to params if the component is reloaded from with the same component and to update the new data
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
  // angular clears up the subscription  whenever the component is destroyed automatically
  // As we waiting for changes by subscribning and if we leave the component subscription will live on in memory

  // to destroy the subscription manually
  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
