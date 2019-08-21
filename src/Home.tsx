import React, { Fragment } from "react";
import { match } from "react-router-native";
import { Text, Header, Content, Title, Body } from "native-base";
import { Image } from "react-native";

interface IProps {
    match: match<any>
};

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
        </Fragment>;
    }
}