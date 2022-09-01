import { Injectable } from '@angular/core';
import json from '../../assets/links.json';
import { Organization } from '../models/organization';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinksAccessorService {
  private _links: BehaviorSubject<Array<Organization>> = new BehaviorSubject(
    [] as Array<Organization>
  );
  public readonly $links: Observable<Array<Organization>> =
    this._links.asObservable();

  constructor() {
    // @ts-ignore
    this._links.next(json.organizations);
  }

  getOrganization(link: string) {
    return this._links.value.find((org) => org.name === link);
  }
}
