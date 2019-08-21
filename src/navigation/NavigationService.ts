import { NavigationActions, StackActions } from 'react-navigation'

let _navigator: any

function setTopLevelNavigator(navigatorRef: any) {
    _navigator = navigatorRef
}

function navigate(routeName: any, params?: object) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}

function reset(routeName: string) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName })
        ]
    })
    _navigator.dispatch(resetAction)
}

function goBack() {
    const popAction = StackActions.pop({
        n: 1
    })
    _navigator.dispatch(popAction)
}

export default {
    setTopLevelNavigator,
    navigate,
    reset,
    goBack
}