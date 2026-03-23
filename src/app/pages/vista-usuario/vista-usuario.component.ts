import { Component, inject, input, signal } from '@angular/core';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { EmpleadosService } from '../../services/empleados-service';
import { Router, RouterLink } from "@angular/router";
import { toast } from 'ngx-sonner';
import { routes } from '../../app.routes';

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
    router = inject(Router)
    
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

    async deleteEmpleado(id: string | undefined){
          try{
            const response = await this.empleadoService.deleteUserById(id);
            if(response._id){
              toast.error(`Empleado ${response.first_name} ha sido borrado`)
              this.router.navigate(['/home'])
            }
            }catch (error){
              toast.warning(`El usurio no ha podido ser borrado`)
            }
        }
}
  
    
