const initialState = {
    patients: [],
  };
  
  const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PATIENTS':
        return {
          ...state,
          patients: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default patientReducer;
  