import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {User} from '../types/users';
import {zustandStorage} from '../../../store/zustandStorage';

export interface AuthState {
  //   token: string | null;
  //   setToken: (token: string | null) => void;
  users: User[];
  currentUser: User | null;
  getUser: (id: string) => void;
  setCurrentUser: (user: User | null) => void;
  logout: () => void;
  updateUser: (user: User) => void;
}

export const userdata: User[] = [
  {
    id: '1',
    email: 'filip@gmail.com',
    password: 'filip123',
    profilePicture: 'awdaw',
    userName: 'filipescu',
    seriesType: ['police', '2', '3'],
  },
  {
    id: '2',
    email: 'bogdan@gmail.com',
    password: 'bogdan123',
    profilePicture: 'hazu',
    userName: 'bogdi',
    seriesType: ['horror', 'crime', 'drama'],
  },
];

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      //   token: null,
      //   setToken: token => set({token}),
      users: userdata,
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
    }),
    {name: 'movie-storage-2', storage: createJSONStorage(() => zustandStorage)},
  ),
);
