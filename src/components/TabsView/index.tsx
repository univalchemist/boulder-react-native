import React, { useCallback, useEffect, useState } from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

import { Colors } from '@/constants'
import TextView from '../TextView'

import { ITabsViewProps } from './types'
import styles from './styles'

export const TabsView: React.FC<ITabsViewProps> = ({
  initial,
  tabs,
  style,
  sceneMap,
  renderLabel,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  useEffect(() => {
    if (initial) setActiveTab(initial)
  }, [initial])

  useEffect(() => {
    if (initial !== activeTab) {
      onTabChange?.(activeTab)
    }
  }, [activeTab, initial, onTabChange])

  const onPressTab = useCallback(
    (key: string) => {
      const index = tabs.findIndex((t) => t.key === key)

      setActiveTab(index >= 0 ? index : 0)
    },
    [tabs],
  )

  const renderTabBar = useCallback(
    (props: any) => (
      <TabBar
        {...props}
        indicatorStyle={styles.tabIndicator}
        style={styles.tabBar}
        tabStyle={styles.tab}
        pressColor={Colors.TRANSPARENT}
        renderLabel={({ route, focused }) => {
          if (renderLabel) {
            return renderLabel({ route, focused })
          }
          return <TextView style={styles.title}>{route.title}</TextView>
        }}
        onTabPress={({ route }) => onPressTab(route.key)}
        onTabLongPress={({ route }) => onPressTab(route.key)}
      />
    ),
    [onPressTab, renderLabel],
  )

  return (
    <TabView
      style={style}
      navigationState={{ index: activeTab, routes: tabs }}
      renderTabBar={renderTabBar}
      renderScene={SceneMap(sceneMap)}
      onIndexChange={() => null}
      swipeEnabled={false}
    />
  )
}

export default TabsView
