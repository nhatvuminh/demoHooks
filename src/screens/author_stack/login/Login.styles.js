import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0083ff',
    alignSelf: 'center',
  },
  titleConnect: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5cce0a',
    fontStyle: 'italic',
  },
  comboInput: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputEmail: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 50,
  },
  inputPassword: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  btnLogin: {
    backgroundColor: '#1270ce',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
});
