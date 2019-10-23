import React from 'react';
import './spinner.css';

export default function Spinner() {
    return (
        <div className="lds-css ng-scope">
            <div style={{width:"100%", height:"100%", top:"50px", left:"50%", marginLeft:"-39.6px"}} className="lds-dual-ring">
                <div></div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}