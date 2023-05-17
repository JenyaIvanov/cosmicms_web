import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast"

export default function Admin() {
    let toastPostID: string
    const [isLoggedIn, setOpen] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get data from the form.
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        


        if(data.username == process.env.adminAccount && data.password == process.env.adminPassword){
            // Toast Message
            toast.success("Welcome 👋", { id: toastPostID })
            setOpen(!isLoggedIn)
        } else {
            // Toast Message
            toast.error("Wrong username or password motherfucka", { id: toastPostID })
        }
    };

    return (
        <div className="rounded-md p-2 bg-slate-600 bg-opacity-30 shadow-md text-white drop-shadow-lg">
            {isLoggedIn ? (
                <div>
                    You are logged in!
                </div>
            ):(
                <div>
                    You are not logged in!

                    <form onSubmit={handleSubmit}>
                       <div className="block drop-shadow-lg">
                            <label htmlFor="username" className="flex font-bold text-white m-2">Username</label>
                            <input type="text" id="username" className="rounded-md text-black p-1" name="username" required />
                            <label htmlFor="password" className="flex font-bold text-white m-2">Password</label>
                            <input type="password" id="password" className="rounded-md text-black p-1" name="password" required />
                            <button type="submit" className="flex rounded-md p-3 bg-blue-400 text-white font-bold mt-4">Submit</button>
                       </div>
                    </form>
                </div>
            )}
        </div>
    )
}