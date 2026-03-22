import { Component, input } from '@angular/core';
import { FormularioUsuarioComponent } from '../../components/formulario-usuario/formulario-usuario.component';

@Component({
  selector: 'app-actualiza-usuario',
  imports: [FormularioUsuarioComponent],
  templateUrl: './actualiza-usuario.component.html',
  styleUrl: './actualiza-usuario.component.css',
})
export class ActualizaUsuarioComponent {
    _id = input<string>()

    ngOnInit()
{
  console.log(this._id())
}}
