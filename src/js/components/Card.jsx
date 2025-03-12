import React from "react";

const Card = (props) => {
    return (
        <div className="text-center w-100 mx-1">            
            {/*  cards */}     
            <div className="card" style={{"width": "18rem", "width": "22rem"}}>
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p> 
                    </div>
                <div class="card-footer">
                    <a href="#" className="btn btn-dark">See more...</a>
                </div>  
            </div>       
        </div>
    );
};

export default Card;
