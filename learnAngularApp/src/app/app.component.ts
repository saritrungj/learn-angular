import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'this loaded dynamically';
  imgUrl: string =
    'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B9%84%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5%20%E0%B9%80%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%94%E0%B9%8C%20%E0%B8%AD%E0%B8%AD%E0%B8%9F%20%E0%B9%81%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%20(IMG%20Worlds%20of%20Adventure)%20%E0%B9%83%E0%B8%99%E0%B8%94%E0%B8%B9%E0%B9%84%E0%B8%9A.jpg';
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruitName: string = 'Orange';
  userName: string = 'John Doe';
  textValue: string = 'value is coming from component'

  buttonclick() {
    console.log('clicked');
  }

  keyEnter(event: any) {
    console.log(event.keyCode);
    event.keyCode == 13 ? console.log('Enter Key Pressed') : ''
  }

  keyupFiltering(user: HTMLInputElement) {
    console.log(user.value)
  }

  updateUserName(username: HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
  }

  onKeyup() {
    console.log(this.textValue);
  }
}
  