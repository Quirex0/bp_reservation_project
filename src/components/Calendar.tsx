"use client"
import React, { useEffect, useState } from 'react';
import { format, isBefore } from 'date-fns';
import { cs } from 'date-fns/locale';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Locale } from 'date-fns';
import TimePicker from './TimePicker'; // Import TimePicker komponenty
import { useRouter } from 'next/navigation';


export default function Calendar() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const router = useRouter();

  const [selectedDay, setSelectedDay] = useState<Date>(tomorrow);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date>(); // State pro uchování vybraného času
  const [firstName, setFirstName] = useState<string>(''); // State pro uchování jména
  const [lastName, setLastName] = useState<string>(''); // State pro uchování příjmení
  const [email, setEmail] = useState<string>(''); // State pro uchování mailu
  const [place, setPlace] = useState<string>('Plzen');
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchAvailableTimes = async () => {

      const isoDateString = `${selectedDay.getFullYear()}-${(selectedDay.getMonth() + 1).toString().padStart(2, '0')}-${selectedDay.getDate().toString().padStart(2, '0')}T00:00:00`;

      const url = `http://localhost:3000/api/getAvailable?date=${isoDateString}&place=${place}`;
      const response = await fetch(url);
      const body = await response.json();

      const times: string[] = [];
      body.forEach((item: { date: string }) => {
        const { date } = item;
        const time = date.slice(11, 16);
        const [hours, minutes] = time.split(':');
        times.push(hours);
      });
      setBookedTimes(times);
    };

    fetchAvailableTimes();
  }, [selectedDay, place]);

  const handleDayClick: SelectSingleEventHandler = async (day: Date | undefined) => {
    if (day && !isBefore(day, new Date())) {
      setSelectedDay(day);
      if (day.getMonth() !== currentMonth.getMonth()) {
        setCurrentMonth(day);
      }
      setSelectedTime(undefined)
    }
  };

  // Funkce pro zpracování vybraného času
  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
    clearFormError('selectedTime');
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    clearFormError('firstName');
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    clearFormError('lastName');
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

  const handlePlaceChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlace(e.target.value);
    setSelectedTime(undefined)
    clearFormError('place');
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !selectedTime) {
      setFormErrors({
        firstName: !firstName ? '* Jméno je povinné.' : '',
        lastName: !lastName ? '* Příjmení je povinné.' : '',
        email: !email ? '* E-mail je povinný.' : isValidEmail(email) ? '' : '* Neplatný formát e-mailu.',
        selectedTime: !selectedTime ? '* Čas je povinný.' : '',
      });
      return;
    }

    setFormErrors({});
    
    const result = await fetch("/api/createReservation", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        place: place,
        date: selectedTime?.toISOString()
      })
    })

    const done = await result.json()
    console.log(done.date)
    router.push("/uspech/" + done.id)
    console.log(done.id)



  }

  const isValidEmail = (email: string) => {
    return email === '' || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const clearFormError = (field: string) => {
    setFormErrors({
      ...formErrors,
      [field]: ''
    });
  };


  const selector = selectedDay ?
    <div>
      <div>
        <TimePicker onTimeSelect={handleTimeSelect} bookedTimes={bookedTimes} selectedDate={selectedDay} setSelectedDate={setSelectedDay} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      </div>
    </div>
    : (
      <div className='flex justify-center text-2xl p-4'>
        Vyberte datum.
      </div>
    );

  const disabledDays = {
    before: new Date(),
  };

  const modifiersStyles = {
    selected: {
      fontWeight: 'bold',
      border: '2px solid #004D79',
      borderRadius: '12px',
      backgroundColor: '#004D79',
    },
    today: {
      fontWeight: 'bold',
      color: 'darkviolet',
    },
  };

  const formatCaption = (month: Date, options?: { locale?: Locale }) => {
    const formattedMonth = format(month, 'LLLL', { locale: options?.locale }); //upravení kalendáře do české podoby
    return formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
  };

  return (
    <div className='flex flex-col lg:flex-row lg:justify-evenly items-center xl:m-20 lg:m-16'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <div className='flex justify-center lg:text-4xl md:text-3xl text-2xl mb-4'>
            Vyberte pobočku:
          </div>
          <div className='flex justify-center'>
            <select className='border-2 rounded-md text-center border-customColor p-1' value={place} onChange={handlePlaceChange}>
              <option value="Plzen">Plzeň</option>
              <option value="Praha_8_Karlin">Praha 8 - Karlín</option>
              <option value="Praha_8_Bohnice">Praha 8 - Bohnice</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col'>
          <DayPicker className='flex justify-center p-4'
            mode="single"
            locale={cs}
            selected={selectedDay}
            onSelect={handleDayClick}
            showOutsideDays
            modifiers={{ disabled: disabledDays }}
            modifiersStyles={modifiersStyles}
            formatters={{ formatCaption }}
            onMonthChange={setCurrentMonth}
            month={currentMonth}
          />

        </div>
      </div>


      <div className='flex flex-col'>
        <div className='flex justify-center flex-wrap m-4'>
          {selector}
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col p-2'>
            {/* Jméno a Příjmení */}
            <div className='flex flex-col md:flex-row justify-evenly'>
              <div className='flex justify-center mb-4'>
                <input className={`border-2 rounded-md border-customColor p-2 w-64 ${formErrors.firstName ? 'border-red-500' : ''}`} id='jmeno' type="text" placeholder="Jméno" value={firstName} onChange={handleFirstNameChange} autoComplete="given-name" />
              </div>
              <div className='flex justify-center mb-4'>
                <input className={`border-2 rounded-md border-customColor p-2 w-64 ${formErrors.lastName ? 'border-red-500' : ''}`} id='prijmeni' type="text" placeholder="Příjmení" value={lastName} onChange={handleLastNameChange} autoComplete="family-name" />
              </div>
            </div>

            {/* Email a button */}
            <div className='flex flex-col md:flex-row justify-evenly mb-4'>
              <div className='flex justify-center mb-4'>
                <input className={`border-2 rounded-md border-customColor p-2 w-64 ${formErrors.email ? 'border-red-500' : ''}`} id='email' type="text" placeholder="Email" value={email} onChange={handleEmailChange} autoComplete="email" />
              </div>
              <div className='flex justify-center mb-4'>
                <button disabled={!selectedTime} className={`border-2 rounded-lg bg-customColor border-customColor text-white p-2 w-64 ${!selectedTime ? 'bg-gray-400 border-gray-400 cursor-not-allowed' : ''}`} onClick={handleSubmit}>
                  Rezervovat
                </button>
              </div>
            </div>

            {/* Shrnutí chyb */}
            <div className="flex justify-center">
              <div className="text-red-500">
                {formErrors.firstName && <div>{formErrors.firstName}</div>}
                {formErrors.lastName && <div>{formErrors.lastName}</div>}
                {formErrors.email && email === '' && <div>{formErrors.email}</div>}
                {formErrors.selectedTime && <div>{formErrors.selectedTime}</div>}
                {email !== '' && !isValidEmail(email) &&
                  <div className="flex justify-center text-red-500 mb-4">* Neplatný formát e-mailu.</div>
                }
              </div>
            </div>

          </div>
        </div>


      </div>

    </div>
  );
}
