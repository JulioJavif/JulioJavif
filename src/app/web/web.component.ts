import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  
  optNav: {label: string, link: ''}[] = [
    {label: 'Sobre mi', link: ''},
    {label: 'Proyectos', link: ''},
    {label: 'Respositorios', link: ''},
    {label: 'contacto', link: ''},
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.navigate(['home'], {relativeTo: this.route});
  }

}
