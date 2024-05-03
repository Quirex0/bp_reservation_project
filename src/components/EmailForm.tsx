"use client";

import { useState } from 'react';

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
    return 'value' in e && 'name' in e
}

const EmailForm = () => {
    const [state, setState] = useState<string>();

    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [content, setContent] = useState<string>('');


    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        clearFormError('firstName');
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        clearFormError('content');
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail === '' || !isValidEmail(newEmail)) {
            setFormErrors({ ...formErrors, email: '* E-mail je povinný.' });
        } else {
            clearFormError('email');
        }
    };

    const isValidEmail = (email: string) => {
        return email === '' || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const clearFormError = (field: string) => {
        setFormErrors({
            ...formErrors,
            [field]: ''
        });
    };

    async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData: Record<string, string> = {};

        if (!firstName || !email || !content) {
            setFormErrors({
                firstName: !firstName ? '* Jméno je povinné.' : '',
                content: !content ? '* Obsah je povinný.' : '',
                email: !email ? '* E-mail je povinný.' : isValidEmail(email) ? '' : '* Neplatný formát e-mailu.',
            });
            return;
        }

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
                        <input className={`border-2 rounded-md border-customColor p-2 w-52 ${formErrors.firstName ? 'border-red-500' : ''}`} id="jmeno" name="firstName" type="text" placeholder="Jméno" value={firstName} onChange={handleFirstNameChange} autoComplete="given-name family-name" />
                    </div>
                    <div className='flex justify-between flex-col md:m-2'>
                        <label className='text-lg my-2' htmlFor="email">E-mail:</label>
                        <input className={`border-2 rounded-md border-customColor p-2 w-52 ${formErrors.email ? 'border-red-500' : ''}`} id='email' type="text" placeholder="E-mail" value={email} onChange={handleEmailChange} autoComplete="email" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='flex justify-between flex-col md:m-2'>
                        <label className='text-lg my-2' htmlFor="content">Váš dotaz:</label>
                        <textarea className={`border-2 rounded-md border-customColor px-5 w-52 ${formErrors.content ? 'border-red-500' : ''}`} id="content" name="content" placeholder="Obsah" value={content} onChange={handleContentChange} />
                    </div>
                    <div className='flex justify-between flex-col md:m-2'>
                        <button className='border-2 rounded-lg bg-customColor border-customColor text-white p-3 mt-8 md:mt-12 w-52' disabled={state === 'loading'}>
                            Odeslat
                        </button>
                    </div>

                </div>

                <div className="flex justify-center">
                    <div className="text-red-500">
                        {formErrors.firstName && <div>{formErrors.firstName}</div>}
                        {formErrors.content && <div>{formErrors.content}</div>}
                        {formErrors.email && email === '' && <div>{formErrors.email}</div>}
                        {email !== '' && !isValidEmail(email) &&
                            <div className="flex justify-center text-red-500 mb-4">* Neplatný formát e-mailu.</div>
                        }
                    </div>
                </div>

            </form>
        </div>

    )
}

export default EmailForm;