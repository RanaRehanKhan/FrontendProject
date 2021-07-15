import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-app';
  isSpecial = true;
  color = '';
  condition = false;
  currentItem = 'Television';
}
