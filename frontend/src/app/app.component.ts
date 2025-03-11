import { Component } from '@angular/core';

import { HelloWorldComponent } from '../app/hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
