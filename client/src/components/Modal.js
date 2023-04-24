import { useState } from "react";

const Modal = () => {
  const mode = "create";
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const textPlaceholder = "Your task goes here";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,

    }));
  };
  console.log(data);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3> Let's {mode} your task</h3>
          <button>x</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder={textPlaceholder}
            name="title"
            value={data.value}
            onChange={handleChange}
          />
          <br />
          <label></label>
          {/* <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            placeholder={textPlaceholder}
            name="progress"
            value={data.value}
            onChange={handleChange}
          /> */}
          <select id="status" name="progress" value={data.value} onChange={handleChange}>
            <option value="">Seleccione una opción</option>
            <option value="done">Done</option>
            <option value="pendent">Pendent</option>
            <option value="paused">Paused</option>
          </select>
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Modal;
