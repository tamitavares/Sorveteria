import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Sorvetes } from '../interfaces/sorvetes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sorvetes = Sorvetes;

  tiposIguais = Sorvetes.filter((sorvete, index, array) => {
    return array.findIndex((s) => s.tipo === sorvete.tipo) === index;
  });

  constructor(private route: Router) { }
}


