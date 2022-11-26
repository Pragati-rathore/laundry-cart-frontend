import React from "react";
import "./createOrderButton.css"

function CreateOrderButton(){

    return (
        <>
        <div className="content">
        <p className="orderno">Order | 0</p>
        <div className="create_search">
        <input type="search" className="search"/>
        <img className='magnifines' src="/images/search.png" alt=""/>
        </div>
        <div className="create_order">
            <p>No Order Available</p>
            {/* <Link to =""><button>Create</button></Link> */}
            <a href='' ><button>Create</button></a>
        </div>
        </div>
        </>
    )
}

export default CreateOrderButton;