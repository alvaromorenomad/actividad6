import { Component, input } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-usuario',
  imports: [RouterLink],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css',
})
export class CardUsuarioComponent {
    miEmpleado = input <IEmpleado>();
}
