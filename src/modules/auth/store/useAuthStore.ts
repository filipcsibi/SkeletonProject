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
  addFavoritesForUser: (userId: string | undefined, favorites: Series) => void;
  getUserFavorites: (userId: string | undefined) => Series[] | undefined;
  removeFavoriteForUser: (
    userId: string | undefined,
    favoriteId: string,
  ) => void;
  updateInterest: (
    userId: string | undefined,
    interest: string,
    which: string,
  ) => void;
  getUserIntrests: (
    userId: string | undefined,
    which: string,
  ) => string | undefined;
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
          favorites: [],
          intrest1: 'reactnative',
          intrest2: 'typescript',
        },
        {
          id: '2',
          email: 'filip2@gmail.com',
          password: 'filip123',
          profilePicture: 'direct',
          userName: 'filipescu',
          favorites: [],
          intrest1: 'masini',
          intrest2: 'pizza',
        },
        {
          id: '3',
          email: 'filip3@gmail.com',
          password: 'filip123',
          profilePicture: 'direct',
          userName: 'filipescu',
          favorites: [],
          intrest1: 'react-native',
          intrest2: 'mancare',
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

      addFavoritesForUser: (userId: string | undefined, favorite: Series) => {
        const userIndex = get().users.findIndex(user => user.id === userId);

        const updatedFavorites = [
          ...get().users[userIndex].favorites,
          favorite,
        ];
        const updatedUser = {
          ...get().users[userIndex],
          favorites: updatedFavorites,
        };
        const updatedUsers = [...get().users];
        updatedUsers[userIndex] = updatedUser;
        set((state: AuthState) => ({
          ...state,
          users: updatedUsers,
        }));
      },

      getUserFavorites: (userId: string | undefined) => {
        const user = get().users.find(user => user.id === userId);
        return user?.favorites;
      },
      removeFavoriteForUser: (
        userId: string | undefined,
        favoriteId: string,
      ) => {
        const userIndex = get().users.findIndex(user => user.id === userId);
        const favorites = get().users[userIndex].favorites;
        const favoriteIndex = favorites.findIndex(
          favorite => favorite.id === favoriteId,
        );
        const updatedUser = {
          ...get().users[userIndex],
          favorites: [
            ...favorites.slice(0, favoriteIndex),
            ...favorites.slice(favoriteIndex + 1),
          ],
        };
        const updatedUsers = [...get().users];
        updatedUsers[userIndex] = updatedUser;
        set((state: AuthState) => ({
          ...state,
          users: updatedUsers,
        }));
      },
      updateInterest: (
        userId: string | undefined,
        interest: string,
        which: string,
      ) => {
        const userIndex = get().users.findIndex(user => user.id === userId);

        if (userIndex !== -1) {
          const updatedUsers = [...get().users];
          const updatedUser = {...updatedUsers[userIndex]};

          if (which === '1') updatedUser.intrest1 = interest;
          else updatedUser.intrest2 = interest;
          updatedUsers[userIndex] = updatedUser;

          set((state: AuthState) => ({
            ...state,
            users: updatedUsers,
          }));
        }
      },
      getUserIntrests: (userId: string | undefined, which: string) => {
        const user = get().users.find(user => user.id === userId);
        if (which === '1') return user?.intrest1;
        else return user?.intrest2;
      },
    }),
    {name: 'movie-storage-6', storage: createJSONStorage(() => zustandStorage)},
  ),
);
