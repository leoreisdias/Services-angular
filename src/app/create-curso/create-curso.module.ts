import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CreateCursoComponent } from './create-curso.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreateCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCursoComponent
  ],
  providers: [CursosService],
})
export class CreateCursoModule { }
