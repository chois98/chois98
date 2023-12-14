const initialState = { contactList: [], keyWord: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNumber: payload.phoneNumber },
        ],
      };
    case "SEARCHBY_USERNAME":
      return {
        ...state,
        contactList: [...state.contactList],
        keyWord: payload.keyWord,
      };
    default:
      return { ...state };
  }
};

export default reducer;
