import {LoginForm} from '../components/login-form';
import {AuthState, useAuthStore} from '../store/useAuthStore';
import {User} from '../types/users';

export const Login = () => {
  const {users, setCurrentUser} = useAuthStore((state: AuthState) => {
    return {
      users: state.users,
      setCurrentUser: state.setCurrentUser,
    };
  });

  const onLogin = (email: string, password: string) => {
    console.log({email, password, users});
    const user = users?.find((user: User) => {
      return user.email === email && user.password === password;
    });
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  };
  return <LoginForm onLogin={onLogin}></LoginForm>;
};
