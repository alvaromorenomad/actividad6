import { Component, computed, EventEmitter, inject, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados-service';
import { IEmpleado } from '../../interfaces/iempleado.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-formulario-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css',
})
export class FormularioUsuarioComponent {
  empleadoService = inject(EmpleadosService);
  router = inject(Router);
  routerURL = inject(ActivatedRoute)
  title : string = 'Nuevo usuario';
  miEmpleado = signal<IEmpleado | null>(null);

  //como he estado pasando toda la información desde la home con el array, solo me ha quedado para reutilizar el component form capturar el id desde la url
  _id = this.routerURL.snapshot.params['_id']
  
  userForm = new FormGroup <IEmpleado | any> ({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    username: new FormControl ('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),

    //cambiar pattern para que verifique el tipo de ruta que me llega del API
    image: new FormControl('',[Validators.required,  Validators.pattern("^(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)\\.(jpg|jpeg|png|gif|webp|svg|online)$")])
  });

  async ngOnInit(){
    console.log(this._id)
    if (this._id){
      this.title = "Actualizar usuario"
      this.miEmpleado.set(await this.empleadoService.getById(this._id))
      this.userForm.patchValue({
        first_name: this.miEmpleado()?.first_name,
        last_name: this.miEmpleado()?.last_name,
        username: this.miEmpleado()?.username,
        email: this.miEmpleado()?.email,
        image: this.miEmpleado()?.image,
      })
    }
  }

  async getDataForm(){

    if(this._id){
      try{
        const response = await this.empleadoService.updateUser(this.userForm.value, this._id);
        //a lo mejor meter una mejora para mostrar los datos que se han modificado
        toast.info(`El usuario se ha actualizado correctamente: ${response._id}`)
        this.router.navigate(['/home'])
      }catch(error){
        toast.error('Error al modificar el usuario')
      }
    }else{
      if(this.userForm.valid){
        this.createUser(this.userForm.value);
        this.userForm.reset({
        first_name: '',
        last_name: '',
        email: '',
        image: ''
        });
      }
      
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
