import React from "react";
import { Container, Footer, FooterTab } from "native-base";
import { NativeRouter, Route, BackButton } from "react-router-native";
import Topics from "./Topics";
import Home from "./Home";
import About from "./About";
import NavLink from "./NavLink";

export default class App extends React.Component<any, any> {
    render() {
        return (<NativeRouter>
            <Container>
                <Route exact path="/" component={Home} />
                <Route path="/topics" component={Topics} />
                <Route path="/about" component={About} />
            </Container>
            <Footer>
                <FooterTab>
                    <NavLink to="/" text="Home" icon="home"/>
                    <NavLink to="/topics" text="Topics" icon="apps"/>
                    <NavLink to="/about" text="About" icon="person"/>
                </FooterTab>
            </Footer>
        </NativeRouter>);
    }
}