'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarPage = () => {
  // 선택한 날짜를 상태로 관리
  const [date, setDate] = useState(new Date());

  // 날짜가 변경될 때 호출되는 콜백 함수
  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>React Calendar Example</h1>
      {/* 캘린더 컴포넌트 */}
      <Calendar
        onChange={onChange} // 날짜가 변경될 때 호출되는 콜백 함수
        value={date} // 선택된 날짜
      />
      {/* 선택된 날짜 표시 */}
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default CalendarPage;
