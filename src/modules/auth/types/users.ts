import {Series} from '../../tvshows/types/series';

export interface User {
  id: string;
  email: string;
  password: string;
  profilePicture: string;
  userName: string;
  favorites: Series[];
  intrest1: string;
  intrest2: string;
}
