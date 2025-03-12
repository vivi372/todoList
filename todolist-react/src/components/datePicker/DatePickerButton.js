import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {ClearIcon} from "@mui/icons-material";
import '../../styles/datePickerStyles.css';

function DatePickerButton() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (date) => {
    //선택한 날짜와 선택된 날짜가 같으면 초기화
    if(date == selectedDate) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
    setShowPicker(false); // 날짜 선택 후 DatePicker 닫기
  };

  return (
    <>
      {/* 날짜 선택 버튼 */}
      <button className="common-btn mt-2"
        onClick={() => setShowPicker(!showPicker)}
      >
        {selectedDate ? <>{format(selectedDate, "yyyy-MM-dd")}<ClearIcon onClick={()=>setSelectedDate(null)}/></> : "날짜 선택"}
      </button>

      {/* DatePicker: showPicker 상태가 true일 때만 렌더링 */}
      {showPicker && (
        <div style={{ position: "absolute", top: "40px", zIndex: 1000 }}>
          <DatePicker 
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            className="custom-datepicker"
          />
        </div>
      )}
    </>
  );
}

export default DatePickerButton;
