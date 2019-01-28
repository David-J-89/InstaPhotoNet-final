import { Photo } from "./photo";

export interface User {
  id: number;
  username: string;
  knownAs: string;  
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;  
  bio?: string;   
  photos?: Photo[];
}
