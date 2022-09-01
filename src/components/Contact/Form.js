import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" defaultValue="name" {...register("name", { required: true })} className="input input-accent bg-accent w-full rounded" />
            <input type="email" defaultValue="email" {...register("email", { required: true })} className="input input-accent bg-accent w-full rounded my-2" />
            <input type="text" defaultValue="subject" {...register("subject", { required: true })} className="input input-accent bg-accent w-full rounded" />
            <textarea type="message" defaultValue="message" {...register("message", { required: true })} rows="7" cols="33" className="textarea textarea-accent bg-accent w-full rounded my-2" />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <button type="submit" className='btn btn-outline btn-secondary rounded'>Send</button>
        </form>
    );
};

export default Form;