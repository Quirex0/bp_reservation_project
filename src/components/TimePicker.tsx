import React, { useState } from 'react';

interface TimePickerProps {
  onTimeSelect: (time: Date) => void;
  bookedTimes: string[];
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeSelect, bookedTimes }) => {
  const [selectedTime, setSelectedTime] = useState<Date>();

  const handleTimeSelect = (hour: number) => {
    const newTime = new Date();
    newTime.setHours(hour);
    newTime.setMinutes(0);
    setSelectedTime(newTime);
    onTimeSelect(newTime);
  };

  const renderTimeButtons = () => {
    const buttons = [];
    const startHour = 10; // Začátek otevření
    const endHour = 19; // Konec otevření
    console.log(bookedTimes)
    for (let hour = startHour; hour <= endHour; hour++) {
      
      if (!bookedTimes.includes(hour.toString())) {
        buttons.push(
          <button
            key={hour}
            onClick={() => handleTimeSelect(hour)}
            className={`px-3 py-1 rounded-md mr-2 mb-2 ${selectedTime && selectedTime.getHours() === hour ? 'bg-customColor text-white'
              : 'bg-gray-200 text-gray-700'}`
            }
          >
            {`${hour}:00`}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className=''>
      <h2 className="text-2xl flex justify-center font-semibold mb-2">
        Vyberte čas:
      </h2>
      <div className="flex flex-wrap">
        {renderTimeButtons()}
      </div>
    </div>
  );
};

export default TimePicker;
