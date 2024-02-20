import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { Toastify } from "../../services/toastify/Popup";
import http from '../../services/baseUrl/baseUrl'

// singUp---------------------------------------------------------------

export const signUp = createAsyncThunk("/authSlice/signUp", async(data)=>{
    // console.log("data login",data);
    try{
      const response=await http.post("/users/register",{
       
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        password: data.password
        
      })
      if(response.status === 200){
        // localStorage.setItem("data", JSON.stringify(response.data));
          console.log("response", response)
        return response.data;
      }
    }catch(error){
        return error.response.data;
        // console.log("error",error);
    }
    

})



// signIn-----------------------------------------------------------------

export const signIn= createAsyncThunk("/user/signIn",async(data)=>{
    try{
        const response=await http.post("/users/login",{
         
          email: data.email,
          password: data.password
          
        })
        if(response.status === 200){
          // console.log("response", response)
          return response.data;
        }
      }catch(error){
          return error.response.data;
          // console.log("error",error);
      }

})

// forgate----------------------------------

export const forGot = createAsyncThunk("/user/forGot",async(data)=>{
    try{
        const response = await http.post("/users/forgotPassword",{
         
          email: data.email,
          
          
        })
        if(response.status === 200){
         
          return response.data;
        }
      }catch(error){
          return error.response.data;
          
      }

})

// update password
export const updatePassword = createAsyncThunk("/authSlice/updatePassword",async(data)=>{
    console.log("data",data)
    const token=data.token
    try{
        const response = await http.put(`/users/updatePassword/${token}`,{
          password: data.values.password,
          })
        if(response.status === 200){
         return response.data;
        }
      }catch(error){
          return error.response.data;
          
      }

})





const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        loading:false,
        popUp:false,
        data:[]

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(signUp.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(signUp.fulfilled,(state,action)=>{
            if (action.payload.success === true){
                Toastify({ success:true,msg: action.payload.message})
            }else{
                Toastify({ success:false,msg: action.payload.message})
            }
            state.loading=false
            state.popUp=true
            // rest useStae + action.payload
        })
        .addCase(signUp.rejected,(state,action)=>{
            console.log("action",action);
            state.loading=false
        })

    //    login
    .addCase(signIn.pending,(state,action)=>{
        state.loading=true
    })
    .addCase(signIn.fulfilled,(state,action)=>{
        if (action.payload.success === true){
            Toastify({ success:true,msg: action.payload.message})
        }else{
            Toastify({ success:false,msg: action.payload.message})
        }
        state.loading=false
        state.popUp=true
        // rest useStae + action.payload
    })
    .addCase(signIn.rejected,(state,action)=>{
        console.log("action",action);
        state.loading=false
    })

    // forgate

    .addCase(forGot.pending,(state,action)=>{
        state.loading=true
    })
    .addCase(forGot.fulfilled,(state,action)=>{
        if (action.payload.success === true){
            Toastify({ success:true,msg: action.payload.message})
        }else{
            Toastify({ success:false,msg: action.payload.message})
        }
        state.loading=false
        state.popUp=true
        // rest useStae + action.payload
    })
    .addCase(forGot.rejected,(state,action)=>{
        // console.log("action",action);
        state.loading=false
    })

    // update password
    .addCase(updatePassword.pending,(state,action)=>{
        state.loading=true
    })
    .addCase(updatePassword.fulfilled,(state,action)=>{
        if (action.payload.success === true){
            Toastify({ success:true,msg: action.payload.message})
        }else{
            Toastify({ success:false,msg: action.payload.message})
        }
        state.loading=false
        state.popUp=true
        // rest useStae + action.payload
    })
    .addCase(updatePassword.rejected,(state,action)=>{
         console.log("action",action);
        state.loading=false
    })



},



})

export default authSlice.reducer