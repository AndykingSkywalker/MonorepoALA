import axios from "axios";
import { useParams } from "react-router-dom";
function FeedbackProps(props) {
    const params = useParams();  

    const resolveReport = () => {
        axios.delete("http://localhost:8082/report/resolve/" + props.id)
        .then((response) => {
            console.log(response);
            props.getFeedback();
        })
        .catch((err) => console.error(err));
    };
    
    return ( 
        <div className='col'>
        <div className='card'>
       
            <div className='card-body'>
                <div style={{display: "flex", flex: "space-between"}}>
                <h5 className='card-title'>Ticket Number: {props.id}</h5>
                <button style={{marginLeft: "8rem"}} onClick={resolveReport} className='btn btn-success'>Issue Resolved</button> 
                </div>
                <div className='card-text'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>User Email: {props.email}</li>
                    </ul>
                    <div class="card-body">
                    <h5> Bug Report: {props.issue}</h5>     
                 </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default FeedbackProps;