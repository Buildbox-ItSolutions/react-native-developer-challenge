import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    marginHorizontal: '10%',
    padding: '1.5%',
    flexWrap: 'wrap',
  },

  cardHeader: {
    flexDirection: 'row',
  },

  actionsContainer: {
    // borderWidth: 1,
    // width: '35%',
    alignSelf: 'center',
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },

  titleContainer: {
    // borderWidth: 1,
    flexDirection: 'column',
    width: '90%',
    flexWrap: 'wrap',
  },

  title: {
    fontSize: 20,
    margin: 3,
    color: colors.white,
  },

  subtitle: {
    fontSize: 14,
    color: colors.white,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default styles;
