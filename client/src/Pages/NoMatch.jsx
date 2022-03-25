import React from "react";
import styled from "styled-components";

const Nomatch = styled.div`
.no-match-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    h2{
        font-size: 38px;
        font-weight: 300;
    }
    .btn{
        cursor: pointer;
        font-size: 16px;
        padding: 15px;
        border: none;
        outline: none;
        background: none;
        border-radius: 5px;
        text-decoration: none;
    }
    .return{
        background: #b3541e;
        color: #e8e19e;
    }
}
`
const NoMatch = () => {
    return (
        <Nomatch className="no-match">
            <div className="no-match-content">
                <h2>Invalid room ID</h2>
                <div className="action-btn">
                    <button className="btn return" to="/">
                        Return to Home Screen
                    </button>
                </div>
            </div>
        </Nomatch>
    );
}

export default NoMatch