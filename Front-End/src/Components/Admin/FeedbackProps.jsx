function FeedbackProps(props) {
    
    return ( 
        <div className='col'>
        <div className='card'>
       
            <div className='card-body'>
                <h5 className='card-title'>Ticket Number: {props.id}</h5>
                <div className='card-text'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>{props.email}</li>
                    </ul>
                    <div class="card-body">
                    <h5>{props.issue}</h5>     
                 </div>
                 {/* <button className='btn btn-primary ' onClick={handleEdit}>Edit Property</button> 
                 {buttonDisplay()} */}
                </div>
            </div>
        </div>
    </div>
     );
}

export default FeedbackProps;