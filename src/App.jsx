import React, { Component } from 'react'
import { Button, message, ConfigProvider } from 'antd'

export default class App extends Component {
    handleClick = () => {
        message.success('successed')
    }
    render() {
        return (
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1DA57A',
                    },
                }}
            >
                <Button type='primary' onClick={this.handleClick}>Primary</Button>
            </ConfigProvider>
        )
    }
}
