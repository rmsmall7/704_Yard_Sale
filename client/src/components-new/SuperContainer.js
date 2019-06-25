import React from 'react';

function SuperContainer (props) {
    return (
        <div className="super_container">
            {props.children}
</div>
    );
}

export default SuperContainer;