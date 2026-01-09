export interface AppUser {
  id: string;
  email: string;
  displayName?: string;
  legalName?: string;
  roles: [
    {
      "name": "string"
    }
  ];
  jobRoles: [
    {
      "name": "string"
    }
  ]
  affiliation?: string;
  location?: string;
  bio?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
  profilePhoto?: string;
  newUser: boolean;
  active: boolean;
}
