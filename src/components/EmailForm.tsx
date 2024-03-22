"use client";

import { useState } from 'react';

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
    return 'value' in e && 'name' in e
}

const EmailForm = () => {
    const [state, setState] = useState<string>();

    async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData: Record<string, string> = {};

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        setState('loading');

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({
                firstName: formData.firstName,
                email: formData.email,
                content: formData.content
            })
        })


        setState('ready');

        window.location.href = '/dotaz';
    }

    return (
        <div className='flex justify-center'>
            <form className="flex flex-col justify-between" onSubmit={handleOnSubmit}>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex justify-between flex-col md:m-2'>
                        <label className='text-lg my-2' htmlFor="firstName">Jméno a Příjmení:</label>
                        <input className='border-2 rounded-md border-customColor p-2' id="firstName" name="firstName" />
                    </div>
                    <div className='flex justify-between flex-col md:m-2'>
                        <label className='text-lg my-2' htmlFor="email">Email:</label>
                        <input className='border-2 rounded-md border-customColor p-2' id="email" name="email" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='flex justify-between flex-col md:m-2'>
                        <label className='text-lg my-2' htmlFor="content">Váš dotaz:</label>
                        <textarea className='border-2 rounded-md border-customColor px-5' id="content" name="content" />
                    </div>
                    <div className='flex justify-between flex-col md:m-2'>
                        <button className='border-2 rounded-lg bg-customColor border-customColor text-white p-3 mt-8 md:mt-12 w-60' disabled={state === 'loading'}>
                            Odeslat
                        </button>
                    </div>

                </div>

            </form>
        </div>

    )
}

export default EmailForm;