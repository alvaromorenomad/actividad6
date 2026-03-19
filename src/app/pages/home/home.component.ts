import { Component } from '@angular/core';
import { CardUsuarioComponent } from "../../components/card-usuario/card-usuario.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CardUsuarioComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
