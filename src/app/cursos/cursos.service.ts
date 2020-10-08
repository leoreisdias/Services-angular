import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/log.service'

@Injectable()
export class CursosService {

  emitirCurso = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Javascript', 'Typescript']

  constructor(private logService: LogService) {

  }

  getCursos() {
    this.logService.consoleLOG('Obtendo Lista de Curso');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLOG(`Adicionando ${curso} à lista!`);
    this.cursos.push(curso);
    this.emitirCurso.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
