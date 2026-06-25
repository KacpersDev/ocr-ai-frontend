"use client";

import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

const SignIn = () => {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault();
    } 

    return (
        <div className="grid justify-center text-center mt-[150px]">
            <p className="font-bold text-[25px] mb-[15px]">Log In</p>
            <form className="grid w-[400px] text-[15px] space-y-[10px] max-[420px]:w-[300px]" onSubmit={handleSubmit}>
                <input required className="bg-black text-white p-[5px]" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                <input required min={8} max={32} className="bg-black text-white p-[5px]" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <input className="bg-black text-white p-[5px] text-[14px] hover:cursor-pointer hover:opacity-75" type="submit" value={"Log in"}/>
                <p onClick={() => router.push('/signup')}>Doesn't have an account? <span className="font-bold hover:cursor-pointer">Sign up</span></p>
            </form>
        </div>
    )
}

export default SignIn;