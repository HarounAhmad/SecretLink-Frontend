import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SecretLink-Frontend';
}
