import React from 'react';

function SuperContainerInner(props) {
    return (
        <div class="super_container_inner">
            {/* <div class="super_overlay"></div> */}
            {props.children}
        </div>
    );
}

export default SuperContainerInner;