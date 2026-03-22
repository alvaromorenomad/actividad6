import { Component, inject, input, signal } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { EmpleadosService } from '../../services/empleados-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vista-usuario',
  imports: [RouterLink],
  templateUrl: './vista-usuario.component.html',
  styleUrl: './vista-usuario.component.css',
})
export class VistaUsuarioComponent {
    _id = input<string>();
    empleadoService = inject(EmpleadosService)
    miEmpleado = signal<IEmpleado | null>(null)
    
    ngOnInit() {
       this.cargarUsuarioId();
    }

    async cargarUsuarioId() {
      try {
        this.miEmpleado.set(await this.empleadoService.getById(this._id()))
        
      } catch (error){
        console.log(error)
      }
    }
}
  
    
