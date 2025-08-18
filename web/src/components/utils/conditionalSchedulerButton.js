import React from 'react';

export default function SchedulerButton({ text, className, useScheduleEngine = false }) {
  const baseClasses = `laptop:rounded-lg px-8 py-2 text-2xl font-bold cursor-pointer ${className}`;

  if (useScheduleEngine) {
    return (
      <button
        className={`se-widget-button ${baseClasses}`}
        type="button"
        onClick={() => ScheduleEngine.show()}
      >
        Schedule Online
      </button>
    );
  }

  return (
    <a href="#contact" className={baseClasses}>
      <button type="button">
        Contact Us
      </button>
    </a>
  );
}

