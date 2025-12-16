export interface AppUser {
  id: string;
  email: string;
  displayName?: string;
  legalName?: string;
  primaryRole?: string;
  otherRoles?: string[];
  roles: {
    id: string;
    name: string;
    description: string;
  }[];
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
