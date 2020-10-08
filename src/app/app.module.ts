import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CreateCursoModule } from './create-curso/create-curso.module'
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CreateCursoModule,
    CursosModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
