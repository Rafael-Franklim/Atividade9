import './Content.css'
import React from "react"

const Content = props => (
    <main className="Content">
        <h1>Apresentção dos conteúdos</h1>
    </main>
)

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/conteudo01/:usuario">
                <Conteudo01 />
            </Route>
            <Route path="/conteudo02">
                <Conteudo02  />
            </Route>
            <Route path="/conteudo03">
                <Conteudo03 />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content