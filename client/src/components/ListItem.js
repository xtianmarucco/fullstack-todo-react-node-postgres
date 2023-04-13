
import TickIcon from './TickIcon';
import ProgressBar from './ProgressBar';

const ListItem = ( {task} ) => {
    return (
        <div>
            <div className="info-container"></div>
            
            <p>{task.title}</p>
            <p>{task.user_email}</p>
            <p>{task.id}</p>
    
        </div>
    )
 }
 export default ListItem;

 //3764996373