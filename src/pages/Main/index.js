import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '~/store/ducks';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '~/styles';
import { Container, Button, ButtonText } from '~/styles/general';
import {
  Header, Title, Search, Input,
} from './styles';


class Main extends Component {
  state={
    text: '',
  }

  componentDidMount() {}

  render() {
    const { req } = this.props;
    const { text } = this.state;

    return (
      <Container>
        <StatusBar
          barStyle="light-content"
        />

        <Header>
          <MaterialCommunityIcons
            name="movie"
            color={colors.white}
            size={45}
          />
          <Title>
            Native
            {'\n'}
            Movies
          </Title>
          <MaterialCommunityIcons
            name="popcorn"
            color={colors.white}
            size={45}
          />
        </Header>

        <Search>
          <Input
            placeholder="Digite..."
            selectionColor={colors.primary}
            value={text}
            onChangeText={t => this.setState({ text: t })}
          />
        </Search>

        <Button
          onPress={() => { req({ text }); }}
        >
          <ButtonText>
            PROCURAR
          </ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    req: Creators.request,
  },
  dispatch,
);

Main.propTypes = {
  req: PropTypes.func,
};

Main.defaultProps = {
  req: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
