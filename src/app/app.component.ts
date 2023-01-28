import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'masri-for-less';
  constructor(private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }
}
