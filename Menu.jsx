import React from "react"

const Menu = props => (
    <aside ClassName="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/conteudo01">Conteúdo 01</Link>
                </li>
                <li>
                    <Link to="/conteudo02">Conteúdo 02</Link>
                </li>
                <li>
                    <Link to="/conteudo03">Conteúdo 03</Link>
                </li>
                <li>
                    <Link to="/conteudo04">Conteúdo 04</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu