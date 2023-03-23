import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    const contar = 5;

    return (
        <div className="d-flex align-items-center">
            <p className="bg-body-tertiary rounded-circle px-2">{contar}</p>
            <div>
                <button className="btn fst-italic"><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    )
}

export default CartWidget;