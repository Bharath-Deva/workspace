import React from 'react'
import Aux from '../../hoc/aux'

const Layout = (props) => {
    return (
        <Aux>
            <div>
                Layout
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;