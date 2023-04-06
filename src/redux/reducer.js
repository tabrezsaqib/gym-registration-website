export const initialState = {
    apiData: [],
    userCredentials: {
        name: "gymuser",
        email: "gymuser@gmail.com",
        password: "GymUser@2020"
    },
    userDetails: [],
    formData: {
      email: "",
        password: ""
    },
    cartArray: []
  };

  export const actionTypes = {
    APIDATA: "APIDATA",
    USERDETAILS: "USERDETAILS",
    FORMDATA: "FORMDATA",
    CARTARRAY: "CARTARRAY"
  };

export const reducer = (state, action) => {
    switch (action.type) {
      case "APIDATA":
        return { ...state, apiData: action.value };
    
        case "USERDETAILS":
            return { ...state, userDetails: action.value  };
        
        case "FORMDATA":
            return { ...state, formData: action.value };
    
      case "CARTLIST":
          return {
            ...state,
            cartArray: action.value,
          };
    }

    
  };