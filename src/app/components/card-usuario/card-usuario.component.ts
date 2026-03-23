import { Component, inject, input } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { Router, RouterLink } from "@angular/router";
import { EmpleadosService } from '../../services/empleados-service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-card-usuario',
  imports: [RouterLink],
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css',
})
export class CardUsuarioComponent {
    miEmpleado = input <IEmpleado>();
    empleadoServide = inject(EmpleadosService);

    async deleteEmpleado(id: string | undefined){
      try{
        const response = await this.empleadoServide.deleteUserById(id);
        if(response._id){
          toast.error(`Empleado ${response.first_name} ha sido borrado`)
        }
        }catch (error){
          toast.warning(`El usurio no ha podido ser borrado`)
        }
    }
  }

