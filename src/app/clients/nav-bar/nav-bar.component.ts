import { Component, OnInit } from '@angular/core';
import { LinksAccessorService } from '../../accessors/links-accessor.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  organizationNames: string[] = [];
  activeLink: string = '';

  constructor(private service: LinksAccessorService) {}

  ngOnInit(): void {
    this.service.$links.subscribe((o) => {
      this.organizationNames = o.map((org) => org.name);
    });
  }
}
