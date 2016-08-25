import * as ActionType from '../constants/ActionTypes';
const defaultState = {
  todos: [{id: 1, title: 'Task 1', isDone: false}],
  counter: 1,
  isFetching: false,
  filter: "showAll"
};

export default function todo(state = defaultState, action) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.todo,
            id: state.counter + 1
          }
        ],
        counter: state.counter + 1
      };
    case ActionType.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            isDone: !todo.isDone
          };

        })
      };
    case ActionType.ARCHIVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => (todo.id !== action.id))
      };

    case ActionType.FILTER_TODO:
      if (!(action.filter).localeCompare("showAll")) {
        return {
          ...state,
          filter: "showAll"
        };
      }
      else if (!(action.filter).localeCompare("active")) {
        return {
          ...state,
          filter: "active"
        };
      }
      else if (!(action.filter).localeCompare("done")) {
        return {
          ...state,
          filter: "done"
        };
      }
    case ActionType.FETCH_TODO_STATE_SUCCESS:
      return {
        ...action.state,
        isFetching: false,
        filter: "showAll"

      };
    case ActionType.FETCH_TODO_STATE_REQUESTED:
      return {
        ...state,
        isFetching: true
      };
    case ActionType.FETCH_TODO_STATE_FAILED:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

