import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {User} from '../types/users';
import {zustandStorage} from '../../../store/zustandStorage';
import {Series} from '../../tvshows/types/series';
import {SeriesStore} from '../../tvshows/store/useSeriesStore';

export interface AuthState {
  //   token: string | null;
  //   setToken: (token: string | null) => void;
  users: User[];
  currentUser: User | null;
  getUser: (id: string) => void;
  setCurrentUser: (user: User | null) => void;
  logout: () => void;
  updateUser: (user: User) => void;
  favorites: Series[];
  getFavorites: (favorites: Series[]) => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      users: [
        {
          id: '1',
          email: 'filip@gmail.com',
          password: 'filip123',
          profilePicture: 'direct',
          userName: 'filipescu',
          seriesType: ['police', '2', '3'],
        },
        {
          id: '2',
          email: 'filip2@gmail.com',
          password: 'filip123',
          profilePicture: 'direct',
          userName: 'filipescu',
          seriesType: ['police', '2', '3'],
        },
        {
          id: '3',
          email: 'filip3@gmail.com',
          password: 'filip123',
          profilePicture: 'direct',
          userName: 'filipescu',
          seriesType: ['police', '2', '3'],
        },
      ],
      currentUser: null,
      getUser: (id: string) => {
        const myUser = get().users?.find(user => user.id === id);
        set((state: AuthState) => ({...state, currentUser: myUser}));
      },
      setCurrentUser: (newUser: User | null) => {
        set((state: AuthState) => ({...state, currentUser: newUser}));
      },
      logout: () => set({currentUser: null}),
      updateUser: (user: User) => {
        const index = get().users?.findIndex(i => i.id === user?.id);
        const newUsers = get().users;
        newUsers[index] = user;
        set((state: AuthState) => ({
          ...state,
          users: newUsers,
          currentUser: user,
        }));
      },
      favorites: [],
      getFavorites: (arr: Series[]) =>
        set((state: AuthState) => ({favorites: arr})),
    }),
    {name: 'movie-storage', storage: createJSONStorage(() => zustandStorage)},
  ),
);
