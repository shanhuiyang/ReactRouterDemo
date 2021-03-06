import React from "react";
import { Footer, FooterTab } from "native-base";
import NavLink from "./NavLinkWithRouter";

export default class TabNavigator extends React.Component<any, any> {
    render() {
        return (<Footer>
            <FooterTab>
                <NavLink to="/" text="Home" icon="home"/>
                <NavLink to="/topics" text="Topics" icon="apps"/>
                <NavLink to="/about" text="About" icon="person"/>
            </FooterTab>
        </Footer>);
    }
}