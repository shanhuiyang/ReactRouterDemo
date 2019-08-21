import React, { Fragment } from "react";
import { Title, Body, Content, Text, Header } from "native-base";

interface IProps {};

interface IStates {};

export default class Topics extends React.Component<IProps, IStates> {
    render(): any {
        return <Fragment>
            <Header noLeft>
                <Body>
                    <Title>Topics</Title>
                </Body>
            </Header>
            <Content padder>
                <Text> TODO: a list of topics to be implemented here.</Text>
            </Content>
        </Fragment>;
    }
}
