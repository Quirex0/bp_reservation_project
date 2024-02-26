"use client"
import React, { useState } from 'react';
import { format, isBefore } from 'date-fns';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Locale } from 'date-fns';
import TimePicker from './TimePicker'; // Import TimePicker komponenty

const monthNamesCzech: Record<string, string> = {
  0: 'Leden',
  1: 'Únor',
  2: 'Březen',
  3: 'Duben',
  4: 'Květen',
  5: 'Červen',
  6: 'Červenec',
  7: 'Srpen',
  8: 'Září',
  9: 'Říjen',
  10: 'Listopad',
  11: 'Prosinec',
};

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>(); // State pro uchování vybraného času

  const handleDayClick: SelectSingleEventHandler = (day: Date | undefined) => {
    if (day && !isBefore(day, new Date())) {
      setSelectedDay(day);
      if (day.getMonth() !== currentMonth.getMonth()) {
        setCurrentMonth(day);
      }
    }
  };

  // Funkce pro zpracování vybraného času
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    // Zde můžete provést další akce potřebné po výběru času
    console.log('Vybraný čas:', time);
  };

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
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
    const monthNumber = month.getMonth();
    return format(month, `LLLL`, { locale: options?.locale }).replace(
      format(month, `LLLL`, { locale: options?.locale }).split(" ")[0],
      monthNamesCzech[monthNumber]
    );
  };

  return (
    <div>
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={handleDayClick}
        showOutsideDays
        modifiers={{ disabled: disabledDays }}
        modifiersStyles={modifiersStyles}
        formatters={{ formatCaption }}
        footer={footer}
        onMonthChange={setCurrentMonth}
        month={currentMonth}
      />
      <div>
        {selectedDay && (
          <TimePicker onTimeSelect={handleTimeSelect} />
        )}
      </div>
    </div>
  );
}
