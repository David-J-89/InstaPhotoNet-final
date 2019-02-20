export interface Photo {
  id: number;
  url: string;
  description: string;
  dateAdded: Date;
  isProfile: boolean;
  userId: number;
  userKnownAs: string;
  userPhotoUrl: string;
  userUserName: string; 
  comments?: Comment[]; 
  
}


