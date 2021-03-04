export const initialState={
    input:null,
    git_info:null,
};
const reducer =(state,action)=>{
    console.log(action)
    switch (action.type){
        case "SET_INPUT":
            return{
                ...state,
                input:action.input,
            }
        case "SET_GITHUB_USERINFO":
            return{
                ...state,
                git_info:action.git_info
            }    
          default:
            return state;  
    }
}
export default  reducer;