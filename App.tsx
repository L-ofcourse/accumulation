import React from 'react'
import AppContainer from './src/navigation/RootStackNavigator'
import NavigationService from './src/navigation/NavigationService'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}