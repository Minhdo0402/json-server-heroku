import React, { Component } from 'react';
import { ScrollView, Text, FlatList, YellowBox } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

class RenderHistory extends Component {
  render() {
    return (
      <Card>
        <Card.Title>Our History</Card.Title>
        <Card.Divider />
        <Text style={{ margin: 10 }}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
        <Text style={{ margin: 10 }}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
      </Card>
    );
  }
}

class RenderLeadership extends Component {
  render() {
    return (
      <Card>
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider />
        <FlatList data={this.props.items}
          renderItem={({ item, index }) => this.renderLeaderItem(item, index)}
          keyExtractor={item => item.id.toString()} />
      </Card>
    );
  }

  renderLeaderItem(item, index) {
    return (
      <ListItem key={index}>
        <Avatar rounded source={require('./images/alberto.png')} />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: 'bold' }}>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
    YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']); // ref: https://forums.expo.io/t/warning-virtualizedlists-should-never-be-nested-inside-plain-scrollviews-with-the-same-orientation-use-another-virtualizedlist-backed-container-instead/31361/6
  }

  render() {
    return (
      <ScrollView>
        <RenderHistory />
        <RenderLeadership items={this.state.leaders} />
      </ScrollView>
    );
  }
}
export default About;