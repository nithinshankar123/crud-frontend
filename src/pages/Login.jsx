import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 const [error,setError]=useState(false)
 const {setUser}=useContext(UserContext)
 const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      // console.log(res.data)
      setUser(res.data)
      navigate("/")

    }
    catch(err){
      setError(true)
      console.log(err)

    }

  }
    return (
    <>
     <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h2 className="text-lg md:text-xl font-extrabold"  style={{color:"#FF6500"}}><Link to="/">Blogospheres</Link></h2>
    <h3 style={{color:"#FF6500"}}><Link to="/register" >Register</Link></h3>
    </div>
<div className="w-full flex justify-center items-center h-[80vh] ">
       <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
         <h1 className="text-xl font-bold text-left" style={{color:"#FF6500"}}>Log in to your account</h1>
         <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" style={{
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px 8px #888888",
  }}/>
         <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" style={{
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px 8px #888888",
  }} />
         <button
  onClick={handleLogin}
  className="w-full px-4 py-4 text-lg font-bold text-white rounded-lg"
  style={{
    background: "#FF6500",
    transition: "all 0.2s ease-in-out",
  }}
  onMouseOver={(event) => {
    event.target.style.backgroundColor = "#ffbf00";
    event.target.style.borderRadius = "595px";
  }}
  onMouseOut={(event) => {
    event.target.style.backgroundColor = "#FF6500";
    event.target.style.borderRadius = "20px";
  }}
>
  Log in
</button> {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
         
        <div className="flex justify-center items-center space-x-3">
          <p style={{color:"#FF6500"}}>New here?</p>
          <p className="text-gray-500 hover:text-black"  style={{color:"#FF6500"}}><Link to="/register">Register</Link></p>
         </div>

       </div>
    </div>
    <Footer/>
    </>
    
  )
}


export default Login