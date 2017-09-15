import { combineReducers } from "redux"
import user from "./userReducer"

export default combineReducers({
	user : user,//user reducer can only acess user object
})