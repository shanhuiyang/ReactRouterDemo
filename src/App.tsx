import React from "react";
import { Container, FooterTab, Footer, Button, Icon, Text } from "native-base";
import { NativeRouter, Route, Link } from "react-router-native";
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
            <Footer>
                <FooterTab>
                    <Link component={Button} vertical to="/" >
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Link>
                    <Link component={Button} vertical to="/topics" >
                        <Icon name="apps" />
                        <Text>Topics</Text>
                    </Link>
                    <Link component={Button} vertical to="/about" >
                        <Icon name="person" />
                        <Text>About</Text>
                    </Link>
                </FooterTab>
            </Footer>
        </NativeRouter>);
    }
}