import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCurso = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Javascript', 'Typescript']

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCurso.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
