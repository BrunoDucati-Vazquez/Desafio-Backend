import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world', // Custom HTML tag
  standalone: true,
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string = 'Hello, Angular!';
}
