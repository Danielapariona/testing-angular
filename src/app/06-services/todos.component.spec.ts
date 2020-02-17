import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Should set todos properties with the items returned from the server', () => {
    let todos = [1, 2, 3];
    /* spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos)
    }); */
    spyOn(service, 'getTodos').and.returnValue(of(todos))
    component.ngOnInit();
    expect(component.todos.length).toBe(todos.length);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(() => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('should set the message property if serve returns an error when adding a new todo', () => {
    let messageError = 'Error from the server';
    let spy = spyOn(service, 'add').and.returnValue(throwError(messageError));

    component.add();

    expect(component.message).toBe(messageError);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
