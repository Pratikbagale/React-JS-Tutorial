
const counterReducer = (state, action) => {
   
     if(action.type === "INC"){
          state = {
            count : state.count + 1
          }
     } else {
            state = {
              count : state.count - 1 
            }
     };

    return   state;

};

export default counterReducer;