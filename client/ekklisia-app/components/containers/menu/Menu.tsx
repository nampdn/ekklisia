import React from 'react'
import {
  ThemeProvider,
  ThemeProviderProps,
  ThemeType,
  withStyles,
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten'

interface ComponentProps {
  selectedIndex: number
  onTabSelect: (index: number) => void
}

type Props = ThemedComponentProps & ComponentProps

class MenuComponent extends React.Component<Props> {
  private onTabSelect = (index: number) => {
    this.props.onTabSelect(index)
  }

  public render(): React.ReactNode {
    const { selectedIndex, themedStyle } = this.props

    return (
      <SafeAreaView style={themedStyle.safeAreaContainer}>
        <ThemeProvider theme={{ ...this.props.theme, ...themes['App Theme'] }}>
          <BottomNavigation
            appearance="noIndicator"
            selectedIndex={selectedIndex}
            onSelect={this.onTabSelect}
          >
            <BottomNavigationTab title="Layouts" icon={LayoutIconOutline} />
            <BottomNavigationTab title="Components" icon={StarIconOutline} />
            <BottomNavigationTab
              title="Themes"
              icon={ColorPaletteIconOutline}
            />
          </BottomNavigation>
        </ThemeProvider>
      </SafeAreaView>
    )
  }
}

export const Menu = withStyles(MenuComponent, (theme: ThemeType) => ({
  safeAreaContainer: {
    backgroundColor: theme['background-basic-color-1'],
  },
}))