import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabController } from 'react-native-ui-lib'
import Home5 from './Home5'
import { Tabs } from 'react-native-collapsible-tab-view'

const Home = (props) => {
    const {navigation} = props
    return (
        <Tabs.Container>
            <Tabs.Tab
                name='Home'
            >
                {<Home5/>}
            </Tabs.Tab>
            <Tabs.Tab
                name='Home2'
            >
                {<Home5/>}
            </Tabs.Tab>
        </Tabs.Container>
    )
}

export default Home

const styles = StyleSheet.create({
    fontSize: 16,
    fontWeight: '500',
    height: 28,
    lineHeight: 28,
})