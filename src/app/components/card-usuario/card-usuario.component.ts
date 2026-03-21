import { Component, input } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';

@Component({
  selector: 'app-card-usuario',
  imports: [],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css',
})
export class CardUsuarioComponent {
    miEmpleado = input <IEmpleado | null>();
}
