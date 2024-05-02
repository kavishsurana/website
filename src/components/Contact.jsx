import NavBar from "./NavBar";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
    
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            () => {
              setSuccess(true);
              form.current.reset();
            },
            () => {
              setError(true);
            }
          );
        }

    return (
        <>
            <NavBar />
            <div className="text-lg flex justify-center mt-6 mb-6">
                Contact Number: +91-989-307-2404
            </div>
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-violet-300 to-purple-300">
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="w-full h-3/4 lg:h-3/4 lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 sm:mx-4 border-2 border-violet-600"
                >
                <span>Dr. Pooja Surana,</span>
                <textarea
                    type="text"
                    className="peer h-full min-h-[80px] w-full resize-none border-b-2 border-b-black bg-red-50 font-sans text-sm font-normal ml-0 mt-0 pl-0"
                    name="user_message"
                />
                <span>My mail address is:</span>
                <input
                    name="user_email"
                    type="text"
                    className="bg-transparent border-b-2 border-b-black outline-none"
                />
                <span>Regards</span>
                <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
                    Send
                </button>
                {success && (
                    <span className="text-green-600 font-semibold">
                    Your message has been sent successfully!
                    </span>
                )}
                {error && (
                    <span className="text-red-600 font-semibold">
                    Something went wrong!
                    </span>
                )}
                </form>   
            </div>
        </>   
    );
}

export default Contact;