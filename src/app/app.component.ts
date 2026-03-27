import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'start-estatico';

  private route = inject(Router)

  ngOnInit(): void {
      this.route.navigate(['/home'])
  }

  public open: boolean = false;
  teste: string = 'Lorenzo';

  public abrirMenu() {
    this.open = !this.open;
  }
}
