import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export 
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#9F1F72',
    borderRadius: 100,
  },
  inputFieldError: {
    borderColor: 'red', // Red border for error
  },
  content: {
    backgroundColor: '#ECF0F3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    position: 'relative',
    padding: 2,
    overflow: 'hidden'
  },
  inputContainer: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 20,
    backgroundColor: '#ECF0F3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'column',
  },
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: "#9F1F72",
    height: 200,
    overflow: "hidden",
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  iconLeft: {
    width: 30,
    height: 30,
    objectFit: 'scale-down',
  },
  otpImage: {
    width: '100%',
    height: Platform.OS === 'ios' ? 270 : 150,
    objectFit: 'contain'
  },
  buttonStyle: {
    width: '100%',
    marginTop: Platform.OS === 'ios' ? width * 0.1 : width * 0.1,
    boxShadow: '0px 4px 20px 0px rgba(159, 31, 114, 0.33)',
  },
  textStyle: {
    fontSize: 18,
  },
  image: {
    width: 140,
    height: 280,
    position: 'absolute',
    top: -38,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain', // Ensures the image covers the whole container
  },
  rightimage: {
    width: 140,
    height: 280,
    position: 'absolute',
    top: -38,
    right: 0,
    bottom: 0,
    resizeMode: 'contain', // Ensures the image covers the whole container
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: Platform.OS === 'ios' ? 68 : 75,
    marginLeft: -6
  },
  title: {
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? 500 : 800,
    color: "#fff",
  },
  rightFemale: {
    height: 210,
    width: 150,
    top: 20,
    right: 0,
    position: 'absolute',
  },

  // ====== row
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
