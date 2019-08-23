import React from 'react'
import { Component } from 'react'
import { Provider } from 'mobx-react'
import AppContainer from './src/navigation/RootStackNavigator'
import NavigationService from './src/navigation/NavigationService'
import RootStore from './src/stores/root'

const rootStore = new RootStore()

export default class App extends Component {

  handleNavigationChange = (prevState: any, newState: any, action: any) => {
    console.log(prevState, newState, action)
  }

  render() {
    return (
      <Provider {...rootStore}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
          onNavigationStateChange={this.handleNavigationChange} 
        />
      </Provider>
    )
  }
}