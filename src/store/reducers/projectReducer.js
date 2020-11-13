const initialState = {
  projects: [
    { id: 1, title: "Help to find stars", content: "Hello, I'm here, that because" },
    { id: 2, title: "The main instinct", content: "You find yourself on the sofa" },
    { id: 3, title: "In jazz man only", content: "Are you back star, Yeah" },
    { id: 4, title: "The man in Black", content: "The proud should be find" },
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("CREATE_PROJECT", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("CREATE_PROJECT", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
