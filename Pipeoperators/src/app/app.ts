import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pipeoperators } from './pipeoperators/pipeoperators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pipeoperators],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Pipeoperators');
}
