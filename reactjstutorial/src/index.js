import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './components/Clock';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Clock />
)

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}




