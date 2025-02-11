import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonFooter, IonToolbar, IonIcon, IonSearchbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonIcon, IonToolbar, IonFooter, IonButton, IonContent]
})
export class CourseComponent  implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPerfil() {
    this.router.navigate(['/home']);
}
  navigateToCurso() {
    this.router.navigate(['/course']);

}
}
