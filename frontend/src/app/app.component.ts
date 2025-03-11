import { Component, OnInit } from '@angular/core';
import { ToolService } from './services/tool.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule, CommonModule]
})
export class AppComponent implements OnInit {
  tools: any[] = []; // Store tools data

  constructor(private toolService: ToolService) {}

  ngOnInit(): void {
    this.toolService.getTools().subscribe(
      (data) => {
        this.tools = data; // Save API response
        console.log('Tools:', this.tools);
      },
      (error) => {
        console.error('Error fetching tools:', error);
      }
    );
  }
}
