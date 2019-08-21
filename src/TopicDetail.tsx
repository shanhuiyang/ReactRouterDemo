import React, { Fragment } from "react";
import { Text, Header, Title, Body, Content } from "native-base";
import { RouteComponentProps } from "react-router-native";

interface IProps extends RouteComponentProps<any> {};

interface IStates {};

export default class TopicDetail extends React.Component<IProps, IStates> {
    render(): any {
        return <Fragment>
            <Header noLeft>
                <Body>
                    <Title>Topic Detail</Title>
                </Body>
            </Header>
            <Content padder>
                <Text>TODO: a Topic detail card is to be implemented here.</Text>
            </Content>
        </Fragment>;
    }
}