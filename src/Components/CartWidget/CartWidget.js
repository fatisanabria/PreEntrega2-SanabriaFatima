import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function CartWidget() {
    const contar = 5;
    return (
        <div className='d-flex align-items-center'>
            <p className='bg-body-tertiary rounded-circle px-2'>{contar}</p>
            <div>
                <Link to={`/Checkout`}><FontAwesomeIcon icon={faCartShopping}/></Link>
            </div>
        </div>
    )
}
export default CartWidget;