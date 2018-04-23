import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div><h1>{{title}}</h1>
      <mech-visit></mech-visit>
    </div>
    `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mechanics-lite';
}
