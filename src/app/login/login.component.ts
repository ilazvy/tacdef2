import { Component, OnInit } from '@angular/core';
import { IonContent, IonIcon, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonInput, IonItem, IonIcon, IonContent, IonLabel, IonButton],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
}
