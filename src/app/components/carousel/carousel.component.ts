import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  myInterval = 3000;
  activeSlideIndex = 0;
  slides: {image: string; title: string; description: string}[] = [
    {image: 'assets/azienda.jpeg', title:'Titolo', description:'descrizione'},
    {image: 'assets/azienda-2.jpeg', title:'Titolo', description:'descrizione'},
    {image: 'assets/azienda-3.jpeg', title:'Titolo', description:'descrizione'}
  ];
}
