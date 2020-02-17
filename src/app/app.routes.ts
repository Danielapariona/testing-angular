import { HomeComponent } from './IntegrationTesting/home/home.component';
import { TodosComponent } from './IntegrationTesting/2-todos/todos.component';
import { UsersComponent } from './IntegrationTesting//users/users.component';
import { UserDetailsComponent } from './IntegrationTesting//3-user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];
