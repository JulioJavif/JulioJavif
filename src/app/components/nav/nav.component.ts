import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output('toggle') toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggle.emit();
  }

  openTab(link: string) {
    switch(link) {
      case 'gh':
        window.open('https://github.com/JulioJavif', '_blank');
        break;
      case 'ln':
        window.open('https://www.linkedin.com/in/juliojavif/', '_blank');
        break;
      default:
        break;
    }
  }
}
