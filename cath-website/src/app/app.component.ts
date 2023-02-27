import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cath-website';

  darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
}
