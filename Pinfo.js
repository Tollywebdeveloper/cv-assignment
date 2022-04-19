import react from "react";
import style from "./style.css";
function Pinfo() {
    return (
        <div className="pinfo">
            <h1>CV APPLICATION</h1>
            <p>Personal Information</p>

            <div className="gen-form">
                <div>
                <label>Firstname</label> <br></br>
                <input type="text" placeholder="e.g John" />
                </div>

                <div>
                <label>Lastname</label> <br></br>
                <input type="text" placeholder="e.g Doe" />
                </div>
            </div>

        <div className="sc">
        <label className="pi">Profession</label> <br />
        <input type="text" placeholder="e.g Web developer" className="profession" />

        </div>
        <div className="location">
                <div>
                <label className="city">City</label> <br />
                <input type="text" className="c1" placeholder="e.g Benin" />
                </div>

                <div>
                <label>Country</label> <br />
                <input type="text" className="c2" placeholder="e.g Nigeria" />
                </div>

                <div>
                <label>Postal Code</label> <br />
                <input type="text" className="c3" placeholder="e.g 009933" />
                </div>
        </div>

        <div className="gen-form">
                <div>
                <label>Phone</label> <br></br>
                <input type="text" placeholder="e.g +234-(815)-(586)-(7960)" />
                </div>

                <div>
                <label>Email</label> <br></br>
                <input type="text" placeholder="e.g Ogundipetemitola@gmail.com" />
                </div>
            </div>

        </div>

    );
}

export default Pinfo;