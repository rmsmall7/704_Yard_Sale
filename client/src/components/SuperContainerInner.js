import React from 'react';

function SuperContainerInner(props) {
    return (
        <div className="super_container_inner">
            {/* <div class="super_overlay"></div> */}
            {props.children}
        </div>
    );
}

export default SuperContainerInner;