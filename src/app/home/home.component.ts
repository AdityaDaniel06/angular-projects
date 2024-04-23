import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {
      // absolute path with slash
      queryParams: { allowEdit: '1' },
      fragment: 'loading', // localhost:4300/servers/1/edit?allowEdit=1#loading
    });
  }

  onLogIn() {
    this.authService.login();
  }
  onLogOut() {
    this.authService.logout();
  }
}
