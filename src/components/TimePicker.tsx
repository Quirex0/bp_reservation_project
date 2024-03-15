import React, { Dispatch, SetStateAction, useState } from 'react';

interface TimePickerProps {
  onTimeSelect: (time: Date) => void;
  bookedTimes: string[];
  selectedDate: Date;
  setSelectedDate: Dispatch <SetStateAction<Date>>
  selectedTime: Date | undefined;
  setSelectedTime:  Dispatch <SetStateAction<Date | undefined>>
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeSelect, bookedTimes, selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {

  const handleTimeSelect = (hour: number) => {
    const newTime = new Date();
    newTime.setHours(hour);
    newTime.setMinutes(0);
    setSelectedTime(newTime);
    selectedDate.setHours(hour);
    selectedDate.setMinutes(0);
    onTimeSelect(selectedDate);
    setSelectedDate(selectedDate);
  };

  const renderTimeButtons = () => {
    const buttons = [];
    const startHour = 10;
    const endHour = 19;
    
    for (let hour = startHour; hour <= endHour; hour++) {
      const isBooked = bookedTimes.includes(hour.toString());
      const isSelected = selectedTime && selectedTime.getHours() === hour;

      buttons.push(
        <button
          key={hour}
          onClick={() => handleTimeSelect(hour)}
          className={`px-3 py-1 rounded-md mr-2 mb-2 flex flex-wrap justify-center w-1/2 aspect-square items-center max-w-16 ${
            isSelected ? 'bg-customColor text-white' : isBooked ? 'bg-red-900 text-white cursor-not-allowed' : 'bg-gray-200 text-gray-700'
          }`}
          disabled={isBooked}
        >
          {`${hour}:00`}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='flex flex-col justify-center'>
      <h2 className=" lg:text-4xl md:text-3xl text-2xl flex justify-center mb-4">
        Vyberte čas:
      </h2>
      <div className="flex flex-wrap justify-center">
        {renderTimeButtons()}
      </div>
    </div>
  );
};

export default TimePicker;
