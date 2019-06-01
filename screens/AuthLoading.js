import React from 'react';
import { ActivityIndicator, AsyncStorage, View , StatusBar} from 'react-native';
import { AppContext } from '../Provider';

import Splash from '../screens/Splash';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.context.getToken()
      .then((userToken) => {
          this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
      })
      .catch(error => {
          this.setState({ error });
      })

    // const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(true ? 'Main' : 'Auth');
    // this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      
      // <ActivityIndicator />  

      <View>
        <AppContext.Consumer>
        {context => ((
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Splash/>
            </View>
        ))}
        </AppContext.Consumer>
      </View>
    );
  }
}

const ForwardRef = React.forwardRef((props, ref) => (
  <AppContext.Consumer>
      {context => <AuthLoading context={context} {...props} />}
  </AppContext.Consumer>
));

export default ({ navigation }) => (
  <View>
      <ForwardRef navigation={navigation} />
  </View>

)