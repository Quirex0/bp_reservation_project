import React, { useState } from 'react';

interface TimePickerProps {
  onTimeSelect: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  const renderTimeButtons = () => {
    const buttons = [];
    const startHour = 8; // Začátek otevření
    const endHour = 20; // Konec otevření

    for (let hour = startHour; hour <= endHour; hour++) {
      buttons.push(
        <button
          key={hour}
          onClick={() => handleTimeSelect(`${hour}:00`)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 mb-2"
        >
          {`${hour}:00`}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Vyberte čas:</h2>
      <div className="flex flex-wrap">
        {renderTimeButtons()}
      </div>
    </div>
  );
};

export default TimePicker;
