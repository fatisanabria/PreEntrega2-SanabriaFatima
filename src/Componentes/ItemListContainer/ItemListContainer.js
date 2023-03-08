import React from "react";

function ItemListContainer({ greeting }) {
    return (
    <div style={{ backgroundColor: '#fff6f6', padding: '20px', textAlign: 'center' }}>
        <h2>{greeting}</h2>
        <p style={{ fontStyle: 'italic' }}>La ropa mas canchera del condado</p>
    </div>
    );
};
export default ItemListContainer