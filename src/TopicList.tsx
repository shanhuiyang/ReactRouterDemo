import React, { Fragment } from "react";
import { match, Route } from "react-router-native";
import Topic from "./Topic";
import TopicItem from "./TopicItem";
import { Header, Title, Body, Content, List } from "native-base";
import TabNavigator from "./TabNavigator";
import { topics } from "./data";

interface IProps {
    match: match<any>
};

interface IStates {};

export default class TopicList extends React.Component<IProps, IStates> {
    render(): any {
        const match: match<any> = this.props.match;
        return <Fragment>
            <Header noLeft>
                <Body>
                    <Title>Topic List</Title>
                </Body>
            </Header>
            <Content>
                <List>
                    {
                        topics.map(
                            (value: Topic) => (<TopicItem value={value} key={value.id} />)
                        )
                    }
                </List>
            </Content>
            {/* only show Footer in list page, do not show Footer in detail page */}
            <TabNavigator />
        </Fragment>;
    }
}
