
import { NextResponse } from "next/server";

export default function middleware(req){
    console.log(req)
    let verify=req.cookies.get('token'); 
    console.log(verify)
    let url=req.url
    console.log("url"+url)


    if(!verify && (url.includes('/Dashboard') || url === "http://localhost:3000/" ))
    {

        return NextResponse.redirect("http://localhost:3000/Login")
    }
    if(verify && (url === "http://localhost:3000/Login" || url === "http://localhost:3000/"  ))
    {
        return NextResponse.redirect("http://localhost:3000/Dashboard")
    }
} 