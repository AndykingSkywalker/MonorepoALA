import axios from "axios"; 
import { useState, useEffect } from "react";
import FeedbackProps from "./FeedbackProps";

function Feedback() {
  const [feedback, setFeedback] = useState([]);

    function getFeedback() {
        axios.get("http://localhost:8082/report/getAll")
          .then((response) => { setFeedback(response.data) })
          .catch(console.log)
      }
      useEffect(() => { getFeedback() }, []);
      
    
      const feedbackList = [];
      for(const f of feedback) {
        console.log(`Feedback: ${f.id}`);
        feedbackList.push(
        <FeedbackProps
        id={f.id}
        email={f.email}
        issue={f.issue}
        getFeedback={getFeedback}
        /> 
      )   
      };

return ( <div>

<h2 class="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "190px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074" }} >Customer Issues</h2>
<div className="row row-cols-4 g-4 mt-1">
{feedbackList};
</div>

    </div> );
}

export default Feedback;