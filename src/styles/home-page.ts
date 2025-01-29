import { Platform, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#9F1F72',
  },
  content: {
    backgroundColor: '#ECF0F3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: width * 0.02,
    overflow: 'hidden',
  },
  inputContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  container: {
    width: '100%',
    backgroundColor: '#9F1F72',
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: height * 0.0,
  },
  otpImage: {
    width: '100%',
    height: Platform.OS === 'ios' ? height * 0.25 : height * 0.25,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: '100%',
    marginTop: Platform.OS === "android" ? height * 0.08 : height * 0,
    shadowColor: '#9F1F72',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.33,
    shadowRadius: 20,
  },
  textStyle: {
    fontSize: width * 0.045,
  },
  image: {
    width: width * 0.3,
    height: height * 0.3,
    position: 'absolute',
    top: -38,
    left: 0,
    resizeMode: 'contain',
  },
  rightimage: {
    width: width * 0.3,
    height: height * 0.3,
    position: 'absolute',
    top: -38,
    right: 0,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    marginTop: Platform.OS === 'ios' ? height * 0.08 : height * 0.1,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: Platform.OS === 'ios' ? '500' : '800',
    color: '#fff',
  },
  errorText: {
    fontSize: width * 0.04,
    color: '#CB0003',
  },
});
