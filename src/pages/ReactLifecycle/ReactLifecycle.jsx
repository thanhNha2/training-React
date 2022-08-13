import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        // currentState.number = 20;
        // return về state mới, nếu giữ state cũ thì return null;
        return null;

    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    render() {
        console.log("render");
        return (
            <div className='container'>
                <h3>Number:{this.state.number}</h3>
                <button className='btn btn-danger' onClick={(() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                })}>+</button>
                <h3>Like: {this.state.like}</h3>
                <button className='btn btn-danger' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>Like</button>

                <Child number={this.state.number} />
            </div>
        )
    }
    componentDidMount() {
        console.log('componentdidmount');
        // Tương tự window.onload
    }
}


/*
    LifeCycle
    + Mouting:
        - Các hàm tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhầm mục địch xử lý state và props
        - Can thiệp thay đổi state trước render (Sử dụng getDeriverStateFromProps)
        + Can thiệp thay đổi sau render sử dụng componentDidMount()
        - ComponentDidMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên ( Thường dùng để call API) 
*/ 