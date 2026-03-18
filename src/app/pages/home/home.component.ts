import { Component } from '@angular/core';
import { CardUsuarioComponent } from "../../components/card-usuario/card-usuario.component";

@Component({
  selector: 'app-home',
  imports: [CardUsuarioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
