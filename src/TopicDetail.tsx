import React, { Fragment } from "react";
import { Text, Header, Title, Body, Content, Left, Button, Icon, Right } from "native-base";
import { RouteComponentProps } from "react-router-native";

interface IProps extends RouteComponentProps<any> {};

interface IStates {};

export default class TopicDetail extends React.Component<IProps, IStates> {
    render(): any {
        return <Fragment>
            <Header >
                <Left>
                    <Button transparent onPress={this.props.history.goBack}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Topic Detail</Title>
                </Body>
                <Right>{/* nothing but counterbalance */}</Right>
            </Header>
            <Content padder>
                <Text>TODO: a Topic detail card is to be implemented here.</Text>
            </Content>
        </Fragment>;
    }
}