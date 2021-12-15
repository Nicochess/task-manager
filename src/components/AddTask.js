import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({ text, date, reminder })

        setText('')
        setDate('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Date</label>
        <input
          type="text"
          placeholder="Add your date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Reminder ?</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
