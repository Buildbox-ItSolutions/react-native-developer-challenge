import React, { Component } from 'react';
import {
  FlatList, StatusBar, View, Platform, Dimensions, Image,
} from 'react-native';
import { ScrollView } from 'react-navigation';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '~/store/ducks';
import Card from '~/components/Card';
import { Container, Button, ButtonText } from '~/styles/general';
import {
  NotFound, Line, Prefix, Content,
} from './styles';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Platform.OS === 'ios'
  ? Dimensions.get('window').height
  : require('react-native-extra-dimensions-android')
    .get('REAL_WINDOW_HEIGHT');

class Results extends Component {
  state = { modalVisible: false }

  componentDidMount() {
    const { movies } = this.props;

    console.tron.log('aaaaaaaaaaa', movies);
  }

  renderItem = (item) => {
    const { set } = this.props;

    return (
      <Card
        poster={item.Poster}
        title={item.Title}
        subtitle={item.Year}
        onClick={async () => {
          await set({ text: item.imdbID });
        }}
      />
    );
  }

  separator = () => (
    <View style={{ height: 15 }} />
  )

  toggleModal = () => {
    const { modalVisible } = this.state;

    this.setState({ modalVisible: !modalVisible });
  }

  render() {
    const {
      movies, selected, modal, toggleM,
    } = this.props;
    // const { modalVisible } = this.state;

    if (movies.length < 1) {
      return (
        <Container>
          <StatusBar
            barStyle="light-content"
          />
          <NotFound>
          Opa!
            {'\n'}
          Não encontramos
            {'\n'}
          resultados para
            {'\n'}
          esta busca
          </NotFound>
        </Container>
      );
    }

    return (
      <Container
        style={{ paddingTop: 15 }}
      >
        <StatusBar
          barStyle="light-content"
        />

        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
          }}
          data={movies}
          keyExtractor={item => `${item.imdbID}`}
          renderItem={({ item }) => this.renderItem(item)}
          ItemSeparatorComponent={() => this.separator()}
        />

        <Modal
          isVisible={modal}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
        >
          <Container>
            <Image
              style={{
                height: 250, resizeMode: 'contain', // alignSelf: 'center',
              }}
              source={{ uri: selected.Poster }}
            />
            <ScrollView>
              <Line>
                <Prefix>Título:</Prefix>
                <Content>
                  {' '}
                  {selected.Title}
                </Content>
              </Line>

              <Line>
                <Prefix>Ano:</Prefix>
                <Content>
                  {' '}
                  {selected.Year}
                </Content>
              </Line>

              <Line>
                <Prefix>Censura:</Prefix>
                <Content>
                  {' '}
                  {selected.Rated}
                </Content>
              </Line>

              <Line>
                <Prefix>Data de lançamento:</Prefix>
                <Content>
                  {' '}
                  {selected.Released}
                </Content>
              </Line>

              <Line>
                <Prefix>Tempo de duração:</Prefix>
                <Content>
                  {' '}
                  {selected.Runtime}
                </Content>
              </Line>


              <Line>
                <Prefix>Gênero:</Prefix>
                <Content>
                  {' '}
                  {selected.Genre}
                </Content>
              </Line>

              <Line>
                <Prefix>Diretor:</Prefix>
                <Content>
                  {' '}
                  {selected.Director}
                </Content>
              </Line>

              <Line>
                <Prefix>Escritor:</Prefix>
                <Content>
                  {' '}
                  {selected.Writer}
                </Content>
              </Line>


              <Line>
                <Prefix>Elenco:</Prefix>
                <Content>
                  {' '}
                  {selected.Actors}
                </Content>
              </Line>

              <Line>
                <Prefix>Descrição:</Prefix>
                <Content>
                  {' '}
                  {selected.Plot}
                </Content>
              </Line>


              <Line>
                <Prefix>Idioma:</Prefix>
                <Content>
                  {' '}
                  {selected.Language}
                </Content>
              </Line>

              <Line>
                <Prefix>País:</Prefix>
                <Content>
                  {' '}
                  {selected.Country}
                </Content>
              </Line>

              <Line>
                <Prefix>Premiações:</Prefix>
                <Content>
                  {' '}
                  {selected.Awards}
                </Content>
              </Line>

              <Line>
                <Prefix>Produção:</Prefix>
                <Content>
                  {' '}
                  {selected.Production}
                </Content>
              </Line>
            </ScrollView>
            <Button
              onPress={() => { toggleM(); }}
            >
              <ButtonText>VOLTAR</ButtonText>
            </Button>

          </Container>
        </Modal>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.data,
  selected: state.selected,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    set: Creators.setReq,
    toggleM: Creators.toggle,
  },
  dispatch,
);

Results.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  modal: PropTypes.bool,
  selected: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ])),
  set: PropTypes.func,
  toggleM: PropTypes.func,
};

Results.defaultProps = {
  movies: [],
  selected: {},
  modal: false,
  set: () => {},
  toggleM: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);
