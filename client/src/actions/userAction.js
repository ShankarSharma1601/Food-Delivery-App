import axios from 'axios'
import swal from 'sweetalert'
export const registerUser = (user) => async (dispatch) =>{
    dispatch({type : 'USER_REGISTER_REQUEST'})

    try{
         await axios.post('/api/users/register',user)
        dispatch({type : 'USER_REQUEST_SUCCESS'})
    }catch(error){
        dispatch({type : 'USER_REGISTER_FAIL', payload : error})
    }
}

export const loginUser = (user) => async (dispatch) =>{
    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
        const res = await axios.post('/api/users/login' , user )
        console.log(res)
        dispatch({type : 'USER_LOGIN_SUCCESS' , payload: res.data})
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAIL' , payload : error})
    }
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}

export const getAllUsers = () => async(dispatch) =>{
    dispatch({type: 'GET_USERS_REQUEST'})
    try{
        const res = await axios.get('/api/users/getallusers')
        console.log(res.data)
        dispatch({type: 'GET_USERS_SUCCESS', payload:res.data})
    }catch(error){
        dispatch({type: 'GET_USERS_FAIL', payload: error})
    }
};

export const deleteUser = (userid) => async (dispatch) => {
    try {
      await axios.post("/api/users/deleteuser", { userid });
      swal("User Deleted Success!", "success");
      window.location.reload()
      // console.log(res);
    } catch (error) {
      swal("Errro While Deleteing user");
    }
  };