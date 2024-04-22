import axios from "axios"; 
import { useState, useEffect } from "react";
import FeedbackProps from "./FeedbackProps";

function Feedback() {

    function getFeedback() {
        axios.get("http://localhost:8082/report/getAll")
          .then((response) => { setFeedback(response.data) })
          .catch(console.log)
      }
      useEffect(() => { getFeedback() }, []);
      const [feedback, setFeedback] = useState([]);
    
      for (const f of feedback) {
        console.log(`Feedback: ${f}`);
        feedback.push(<FeedbackProps
        id={f.id}
        email={f.email}
        issue={f.issue}
        
        /> ) 
        
      };

return ( <div>

<h2 class="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "190px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074" }} >Customer Issues</h2>
{};


    </div> );
}

export default Feedback;