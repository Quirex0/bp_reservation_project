"use client"
import React, { useEffect, useState } from 'react';
import { format, isBefore } from 'date-fns';
import { cs } from 'date-fns/locale';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Locale } from 'date-fns';
import TimePicker from './TimePicker'; // Import TimePicker komponenty


export default function Calendar() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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
    setEmail(e.target.value);
    clearFormError('email');
  };

  const handlePlaceChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlace(e.target.value);
    setSelectedTime(undefined)
    clearFormError('place');
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !selectedTime) {
      setFormErrors({
        firstName: !firstName ? 'Jméno je povinné.' : '',
        lastName: !lastName ? 'Příjmení je povinné.' : '',
        email: !email ? 'E-mail je povinný.' : isValidEmail(email) ? '' : 'Neplatný formát e-mailu.',
        selectedTime: !selectedTime ? 'Čas je povinný.' : '',
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
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
        <TimePicker onTimeSelect={handleTimeSelect} bookedTimes={bookedTimes} selectedDate={selectedDay} setSelectedDate={setSelectedDay} />
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
    const formattedMonth = format(month, 'LLLL', { locale: options?.locale }); // Formátujeme název měsíce s velkým počátečním písmenem
    return formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1); // Zajistíme, že první písmeno bude velké
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

        <div className='flex flex-col p-2'>
          <div className='flex flex-col lg:flex-row justify-evenly'>
            <div className='flex flex-col mb-4'>
              <div className='flex justify-center mb-2'>
                Jméno:
              </div>
              <div className='flex justify-center'>
                <input className='border-2 rounded-md border-customColor p-1' id='jmeno' type="text" placeholder="Jan" value={firstName} onChange={handleFirstNameChange} autoComplete="given-name" />
                {formErrors.firstName && <span className="text-red-500">{formErrors.firstName}</span>}
              </div>
            </div>
            <div className='flex flex-col mb-4'>
              <div className='flex justify-center mb-2'>
                Příjmení:
              </div>
              <div className='flex justify-center'>
                <input className='border-2 rounded-md border-customColor p-1' id='prijmeni' type="text" placeholder="Novák" value={lastName} onChange={handleLastNameChange} autoComplete="family-name" />
                {formErrors.lastName && <span className="text-red-500">{formErrors.lastName}</span>}
              </div>
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <div className='flex justify-center mb-2'>
              E-mail:
            </div>
            <div className='flex justify-center'>
              <input className='border-2 rounded-md border-customColor p-1' id='email' type="text" placeholder="jan.novak@gmail.com" value={email} onChange={handleEmailChange} autoComplete="email" />
              {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
            </div>
          </div>
          <div className='flex justify-center m-4'>
            <button disabled={!selectedTime || !!formErrors.firstName || !!formErrors.lastName || !!formErrors.email || !!formErrors.selectedTime} className={`border rounded-lg bg-customColor text-white p-2 ${!selectedTime && !formErrors.firstName && !formErrors.lastName && !formErrors.email && !formErrors.selectedTime ? 'bg-gray-400 cursor-not-allowed' : ''}`} onClick={handleSubmit}>
              Rezervovat
            </button>
          </div>
        </div>
      </div>




    </div>
  );
}
