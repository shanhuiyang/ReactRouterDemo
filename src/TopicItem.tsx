import React from "react";
import Topic from "./Topic.d";
import { Body, ListItem, Left, Thumbnail, Text, Right } from "native-base";

interface IProps {
    value: Topic
};

interface IStates {};

export default class TopicItem extends React.Component<IProps, IStates> {
    render(): any {
        const topic: Topic = this.props.value;
        return <ListItem avatar>
            <Left>
                <Thumbnail small source={topic.speakerAvatar} />
            </Left>
            <Body>
                <Text>{topic.title}</Text>
                <Text note>{topic.speaker}</Text>
            </Body>
            <Right>
                <Text note>{topic.schedule.toLocaleDateString()}</Text>
            </Right>
        </ListItem>;
    }
}
