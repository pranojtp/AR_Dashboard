export interface User {
  id: string;
  email: string;
  displayName?: string;
  legalName?: string;
  primaryRole?: string;
  otherRoles?: string[];
  affiliation?: string;
  location?: string;
  bio?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
  profilePhoto?: string;
}
