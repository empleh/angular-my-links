import { Component, OnInit } from '@angular/core';
import { LinksAccessorService } from '../../accessors/links-accessor.service';
import { Organization } from '../../models/organization';

@Component({
  selector: 'app-organization-view',
  templateUrl: './organization-view.component.html',
  styleUrls: ['./organization-view.component.scss'],
})
export class OrganizationViewComponent implements OnInit {
  organization?: Organization;

  constructor(private service: LinksAccessorService) {}

  ngOnInit(): void {
    this.service.selectedOrganization$.subscribe((o) => {
      this.organization = o;
    });
  }
}
