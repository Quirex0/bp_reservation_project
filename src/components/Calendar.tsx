"use client"
import React, { useState } from 'react';
import { format, isBefore } from 'date-fns';
import { cs } from 'date-fns/locale';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Locale } from 'date-fns';
import TimePicker from './TimePicker'; // Import TimePicker komponenty


export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date>(); // State pro uchování vybraného času
  const [firstName, setFirstName] = useState<string>(''); // State pro uchování jména
  const [lastName, setLastName] = useState<string>(''); // State pro uchování příjmení
  const [email, setEmail] = useState<string>(''); // State pro uchování mailu
  const [place, setPlace] = useState<string>('Plzen');
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);

  const handleDayClick: SelectSingleEventHandler = async (day: Date | undefined) => {
    if (day && !isBefore(day, new Date())) {
      setSelectedDay(day);
      if (day.getMonth() !== currentMonth.getMonth()) {
        setCurrentMonth(day);
      }

      const response = await fetch(`http://localhost:3000/api/getAvailable?date=${day}&place=${place}`)
      const body = await response.json()

      const times: string[] = [];

      body.forEach((item: { date: string }) => {
        const { date } = item;
        const time = date.slice(11, 16);
        const [hours, minutes] = time.split(':');
        //const formattedTime = `${hours}:${minutes}`;
        times.push(hours);
      });
      setBookedTimes(times)
    }
  };

  // Funkce pro zpracování vybraného času
  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
    console.log(time.toString()); // Logování vybraného času do konzole
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);
  };

  const footer = selectedDay ?
    <div>
      <div>
        <TimePicker onTimeSelect={handleTimeSelect} bookedTimes={bookedTimes} />
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
    <div className='flex sm:flex-row flex-col justify-evenly p-2'>
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
        <div>
          {footer}
        </div>
      </div>
      <div className='flex flex-col justify-evenly p-2'>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col pr-2'>
            <div>
              Jméno:
            </div>
            <div>
              <input className='border-2 rounded-md border-customColor p-1' id='jmeno' type="text" placeholder="Jan" value={firstName} onChange={handleFirstNameChange} autoComplete="given-name" />
            </div>
          </div>
          <div className='flex flex-col pl-2'>
            <div>
              Příjmení:
            </div>
            <div>
              <input className='border-2 rounded-md border-customColor p-1' id='prijmeni' type="text" placeholder="Novák" value={lastName} onChange={handleLastNameChange} autoComplete="family-name" />
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col pr-2'>
            <div>
              E-mail:
            </div>
            <div>
              <input className='border-2 rounded-md border-customColor p-1' id='email' type="text" placeholder="jan.novak@gmail.com" value={email} onChange={handleEmailChange} autoComplete="email" />
            </div>
          </div>
          <div className='flex flex-col pl-2'>
            <div>
              Kde:
            </div>
            <div>

            </div>
          </div>
        </div>


        <div className=''>
          <button className='border rounded-lg bg-customColor text-white p-2'>
            Rezervovat
          </button>
        </div>
      </div>
    </div>
  );
}
