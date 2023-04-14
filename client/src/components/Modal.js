const Modal = () => {
    const mode = 'edit'
    const textPlaceholder = 'Your task goes here'
    const handleChange = () => {
        console.log('changing')
    }
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
                        value={""}
                        onChange={handleChange}
                     />

                    <input
                    required
                    type="range"
                    min="0"
                    max="100"
                    maxLength={30}
                    placeholder={textPlaceholder}
                    name="progress"
                    value={""}
                    onChange={handleChange}/>
                    <input 
                    className={mode}
                    type="submit"/>
                </form>
            </div>
        </div>
    )
}
export default Modal;
