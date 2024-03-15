import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  //  ActivatedRoute: injects the currently active route.So for ths component the route which you loaded it,

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    // this.router.navigate(['servers', { relativeTo: this.route }]);  
    //relative path handling
    // http://localhost:4300/servers/servers,
    // unlike the routerLink the navigate method doesn't know on which route you're currently on,
    // The router link always knows in which component it sits,in which component's template
    // and therefore it knows what the currently loaded route is.

    // this.router.navigate(['/servers']); absolute path
  }
}
