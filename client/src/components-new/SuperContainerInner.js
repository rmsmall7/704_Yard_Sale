import React from 'react';

function SuperContainerInner(props) {
    return (
        <div class="super_container_inner">
            {props.children}
        </div>
    );
}

export default SuperContainerInner;