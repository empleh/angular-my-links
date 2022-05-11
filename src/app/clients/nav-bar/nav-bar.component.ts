import { Component, OnInit } from '@angular/core';
import {LinksAccessorService} from "../../accessors/links-accessor.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private service: LinksAccessorService) { }

  ngOnInit(): void {
    this.service.$links.subscribe(l=> console.log(l));
  }

}
