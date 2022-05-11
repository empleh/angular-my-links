export interface Organization {
  name: string;
  color: string;
  icon: string;
  mottos: Array<string>;
  links: Array<OrganizationLinks>;
}

export interface OrganizationLinks {
  name: string;
  urls: Array<LinkUrls>;
}

export interface LinkUrls {
  name: string;
  url: string;
}
