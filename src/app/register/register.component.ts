import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonLabel, IonInput, IonItem, IonIcon, IonButton, IonToolbar, IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [IonTitle, IonHeader, IonToolbar, IonLabel, IonContent, IonInput, IonItem, IonIcon, IonContent, IonLabel, IonButton],
  styleUrls: ['./register.component.scss'],
  standalone: true,
})
export class RegisterComponent implements OnInit {
 
  ngOnInit(): void {
 
  }

  constructor(private router: Router) {}
  
  redirectToHome() {
    this.router.navigate(['/home']);
}
}