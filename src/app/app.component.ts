import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  listaTareas: string[] = [];
  nuevaTarea: string = '';
  currentYear: number = new Date().getFullYear();
  
  private _tareasService = inject(TareasService);
  
  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this._tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
      this.listaTareas = this._tareasService.getTareas();
    }
  }

  eliminarTarea(index: number) {
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
