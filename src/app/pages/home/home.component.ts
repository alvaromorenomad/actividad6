import { Component, inject, signal } from '@angular/core';
import { CardUsuarioComponent } from "../../components/card-usuario/card-usuario.component";
import { RouterLink } from "@angular/router";
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { EmpleadosService } from '../../services/empleados-service';

@Component({
  selector: 'app-home',
  imports: [CardUsuarioComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  arrayEmpleados = signal<IEmpleado[]>([]);
  empleadoService = inject(EmpleadosService); 

  ngOnInit() {
    this.cargarEmpleados();
  }

  async cargarEmpleados() {
    try {
      const response = await this.empleadoService.getAll();
      this.arrayEmpleados.set(response.results)
   }catch(error){
      console.error(error)
    }
  }






}
