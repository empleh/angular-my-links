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
  navColor: string = '#ffdd00';

  constructor(private service: LinksAccessorService) {}

  ngOnInit(): void {
    this.service.$links.subscribe((o) => {
      this.organizationNames = o.map((org) => org.name);
      this.activeLink = this.organizationNames[0];
    });
  }

  selectOrganization(link: string) {
    this.activeLink = link;
    this.navColor = this.service.getOrganization(link)?.color || '#ffdd00';
  }
}
