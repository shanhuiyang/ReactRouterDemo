import React, { Fragment } from "react";
import { Title, Body, Content, Header, List } from "native-base";
import { topics } from "./data";
import Topic from "./Topic";
import TopicItem from "./TopicItem";

interface IProps {};

interface IStates {};

export default class Topics extends React.Component<IProps, IStates> {
    render(): any {
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
        </Fragment>;
    }
}
