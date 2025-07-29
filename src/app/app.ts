import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Tareas } from './services/tareas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  listaTareas:string[] = [];
  nuevaTarea:string = '';

  private _tareasService = inject(Tareas);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea()
  {
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }
  
  eliminarTarea(index:number)
  {
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
