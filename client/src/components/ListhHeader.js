import Modal from "./Modal";

 const ListHeader = ({ listName }) => { 


    const signOut =()=> {
        console.log('signOut')
    }
    return (
        <div>
            <h1>
                {listName}
            </h1>
            <div className="button-container">
                <button className="create"> ADD NEW</button>
                <button className="create" onClick={signOut}>SIGN OUT</button>

            </div>
            <Modal/>
        </div>
    )
 }
 export default ListHeader;
