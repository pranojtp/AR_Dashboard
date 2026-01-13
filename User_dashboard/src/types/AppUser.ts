export interface Role {
  name: string;
}

export interface JobRole {
  name: string;
}

export interface AppUser {
  id: string;
  email: string;

  displayName?: string;
  legalName?: string;

  roles: Role[];
  jobRoles: JobRole[];

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
