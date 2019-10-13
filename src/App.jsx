import React, { Component } from 'react';
import './App.css'

import KeyPadComponent from './components/KeyPadComponent'
import ScreenDisplayComponent from './components/ScreenDisplayComponent'

class App extends Component {
    constructor(){
        super()

        this.state = {
            result: ''
        }
    }

    onClick = (button) => {
        switch (button) {
            case '=':
                this.calculate()    
                break;
            case 'clear':
                this.clearResult()
                break;
            default:
                this.setState({
                    result: this.state.result + button
                })
                break;
        }
    }

    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            if (checkResult.includes('÷')) {
                const newResult = checkResult.replace('÷', '/')
                this.setState({
                    result: (eval(newResult) || '' ) + ''
                })
            } else {
                this.setState({
                    result: (eval(checkResult) || '' ) + ''
                })
            }
        } catch (e) {
            this.setState({
                result: 'error'
            })

        }
    }

    clearResult = () => {
        this.setState({
            result: ''
        })
    }

    renderKeyPad = () => {
        const numberKeyArr = ['clear', '÷', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=']
        const keyPad = []

        numberKeyArr.forEach((el, index) => {
            keyPad.push(<KeyPadComponent classNameButton='keypad' element={el} name={el} onClickAction={this.onClick} key={index} />)
        })

        return keyPad
    }

    render() {
        return (
            <div className='calculator-body'>
                <h1>Calculator</h1>
                <ScreenDisplayComponent result={this.state.result} equation={this.state.equation} />
                <div className='keypad-container'>{this.renderKeyPad()}</div>
            </div>
        )
    }
}

export default App