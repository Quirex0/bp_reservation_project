"use client"
import { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            const response = await axios.post('/api/sendEmail', { name, email, message });
            if (response.data.success) {
                setSent(true);
                setName('');
                setEmail('');
                setMessage('');
                setError('');
            } else {
                setError(response.data.error || 'Something went wrong');
            }
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setSending(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-evenly flex-col'>
                <div className='flex justify-between flex-col my-2'>
                    <label className='text-lg'>Jméno a příjmení:</label>
                    <input className='border-2 border-customColor rounded-md' type="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='flex justify-between flex-col my-2'>
                    <label className='text-lg'>Email:</label>
                    <input className='border-2 border-customColor rounded-md' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='flex justify-between flex-col my-2'>
                    <label className='test-lg'>Message:</label>
                    <textarea className='border-2 border-customColor rounded-md' value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <button className='border-2 rounded-md bg-customColor text-white p-2' type="submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Send'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {sent && <p style={{ color: 'green' }}>Email sent successfully!</p>}
            </form>
        </div>
    );
};

export default EmailForm;
