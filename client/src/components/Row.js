import React from 'react';

function Row (props) {
 return (
    <div class="row products_row">
        {props.children}
    </div>
 );
}

export default Row;