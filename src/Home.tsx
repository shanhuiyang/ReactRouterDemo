import React, { Fragment } from "react";
import { Text, Header, Content, Title, Body } from "native-base";
import TabNavigator from "./TabNavigator";
import { Image } from "react-native";

interface IProps {};

interface IStates {};

export default class Home extends React.Component<IProps, IStates> {
    render(): any {
        return <Fragment>
            <Header noLeft>
                <Body>
                    <Title>React Router Demo</Title>
                </Body>
            </Header>
            <Content padder>
                <Text> This is the home page of react router 4.0 demo.</Text>
                <Image style={{ alignSelf: "center" }} source={require("../logo.png")}/>
            </Content>
            <TabNavigator/>
        </Fragment>;
    }
}