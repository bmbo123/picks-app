import React from "react";
import "./PropBox.css"

function PropBox(){
    return(
        <div className="p-box">
            <div className="p-name">
                Lebron James
            </div>
            <div className="p-picture"></div>
            <div className="over-under">
                <div className="over">90% + </div>
                <div className="under">10% -</div>
            </div>
        </div>
    );
}

export default PropBox;