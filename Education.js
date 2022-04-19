import react from "react";
import style from "./style.css";
function Education() {
    return (
        <div>
            <div className="pinfoo">
            <p>Education</p>

            <div className="gen-form">
                <div>
                <label>School Name</label> <br></br>
                <input type="text" placeholder="e.g Obafemi Awolowo Univeristy" />
                </div>

                <div>
                <label>School Location</label> <br></br>
                <input type="text" placeholder="e.g Osun state, Ile-ife" />
                </div>
            </div>

        <div className="sc">
        <label className="pi">Degree</label> <br />
        <input type="text" placeholder="e.g Bachelor's (BSc)" className="profession" />

        </div>
           
        <div className="location">
                <div>
                <label>Field of Study</label> <br />
                <input type="text" className="c4" placeholder="e.g Benin" />
                </div>

                <div>
                <label>State Date</label> <br />
                <input type="date" className="c5" />
                </div>

                <div>
                <label>End Date</label> <br />
                <input type="Date" className="c6"  />
                </div>
        </div>
            </div>
            
        </div>
    );
}

export default Education;