import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DevOpsAssignment';
  number = 0;
  password = 'testSecurity';

  increementNumber(){
    this.number++;
  }

  decreementNumber(){
    this.number--;
  }

  login() {
    console.log("To check the security hotspot in sonar cloud: ", this.password);
  }
}
