import { CREATE_NOTE, DELETE_NOTE } from "../../actions/types";

const initialState = [
  {
    id: 1,
    title: 'Go by Market',
    details: '1. buy carrot, 2. return milk, 3. choose socks',
    category: 'todos'
  },
  {
    id: 2,
    title: 'Take a child',
    details: 'pay for kindergarten',
    category: 'money'
  },
];

export const notesReducer = (state = initialState, { type, id, title, details, category }) => {
  switch (type) {
    case CREATE_NOTE:
      return [
        ...state,
        {
          id,
          title,
          details,
          category
        }
      ];
    case DELETE_NOTE:
      return [
        ...state.filter(post => post.id !== id)
      ];
    default:
      return state;
  }
};
