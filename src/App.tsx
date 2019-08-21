import React from "react";
import { Container } from "native-base";
import { NativeRouter, Route } from "react-router-native";
import Topics from "./Topics";
import Home from "./Home";
import About from "./About";

export default class App extends React.Component<any, any> {
    render() {
        return (<NativeRouter>
            <Container>
                <Route exact path="/" component={Home} />
                <Route path="/topics" component={Topics} />
                <Route path="/about" component={About} />
            </Container>
        </NativeRouter>);
    }
}