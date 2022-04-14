const initialState = [
  {
    id: 1,
    name: "Anil",
    email: "anil.k@alivenow.in",
    mobile: 9960922747,
    address: "Ballia",
  },
  {
    id: 2,
    name: "Anil 2",
    email: "anil.k@alivenow.in",
    mobile: 9960922747,
    address: "Ballia",
  },
  {
    id: 3,
    name: "Anil 3",
    email: "anil.k@alivenow.in",
    mobile: 9960922747,
    address: "Ballia",
  },
  {
    id: 5,
    name: "Anil 5",
    email: "anil.k@alivenow.in",
    mobile: 9960922747,
    address: "Ballia",
  },
];

const contactReducer = (state = initialState, action) =>
{
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "UPDATE_CONTACT":
        const updateState = state.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state = updateState;
        return state;
      case "DELETE_CONTACT":
        const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
        state = filterContacts;
        return state;

      default:
        return state;
    }
}

export default contactReducer;