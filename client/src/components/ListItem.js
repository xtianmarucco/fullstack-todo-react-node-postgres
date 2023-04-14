
import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';

const ListItem = ({ task }) => {
    return (
        <li className='list-item'>
            <div className="info-container">
                <TickIcon></TickIcon>
                <p>{task.title}</p>
                <ProgressBar></ProgressBar>
            </div>



            <div className="button-container">
                <button className='edit'>EDIT</button>
                <button className='delete'>DELETE</button>

            </div>
        </li >
    )
}
export default ListItem;

 //3764996373