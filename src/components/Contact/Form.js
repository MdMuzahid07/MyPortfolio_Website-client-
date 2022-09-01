import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        toast.error("it's not functional, Developer working on it!");
    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-accent bg-accent w-full rounded" />
            <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-accent bg-accent w-full rounded my-2" />
            <input type="text" placeholder="subject" {...register("subject", { required: true })} className="input input-accent bg-accent w-full rounded" />
            <textarea type="message" placeholder="message" {...register("message", { required: true })} rows="10" cols="33" className="textarea textarea-accent text-xs bg-accent w-full rounded my-2" />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <button type="submit" className='btn btn-outline btn-secondary rounded'>Send</button>
        </form>
    );
};

export default Form;