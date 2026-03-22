import { Component, EventEmitter, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados-service';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-formulario-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css',
})
export class FormularioUsuarioComponent {
  empleadoService = inject(EmpleadosService);
  router = inject(Router);
  //falseado del pintado de usuarios nuevos en la home. 

  
  userForm = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    username: new FormControl ('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
    image: new FormControl('',[Validators.required,  Validators.pattern("^(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)\\.(jpg|jpeg|png|gif|webp|svg)$")])
  });

  getDataForm(){
    if(this.userForm.valid){
      this.createUser(this.userForm.value)
      this.userForm.reset({
        first_name: '',
        last_name: '',
        email: '',
        image: ''
      });
    }
    
  }

  async createUser (empleado : IEmpleado | any){
    try {
        const response = await this.empleadoService.insertUser(empleado);
        toast.success('Usuario creado', {
          description: `${response.username}: ${response.id}`

  });
        this.router.navigate(['/home']);
        console.log('Usuario creado', response);
        
    }catch(error){
      console.error('Error al crear usuario', error);
    }
  }

  checkError(controlName: string, errorName: string){
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched;
  }

  }
