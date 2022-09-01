import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Form = () => {
    const form = useRef();

    const handleSentEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_jdzndym', 'template_g1sji6n', form.current, 'rhiKOtmAKXPTOOis6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        event.target.reset();

        toast.success("Send!");
    }
    return (
        <form onSubmit={handleSentEmail} ref={form}>
            <input className='input input-accent bg-accent w-full rounded' placeholder="Your Name" type="text" name="name" id="" required />
            <input className='input input-accent bg-accent w-full rounded my-2' placeholder="Your Email Address" type="email" name="email" id="" required />
            <input className='input input-accent bg-accent w-full rounded' placeholder="Subject" type="text" name="subject" id="" required />
            <textarea className='textarea textarea-accent text-xs bg-accent w-full rounded my-2' placeholder="message" rows="10" cols="33" name="message" id="" required />
            <br />
            <button type="submit" className='btn btn-outline btn-secondary rounded'>Send</button>
        </form>
    );
};

export default Form;