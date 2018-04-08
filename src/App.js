import React, { Component } from 'react';
import { Route , Switch , HashRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.less'

// 只负责显示的组件
import {
  loading
} from '@/components'



const AsyncInformation = Loadable({
  loader: () => import('@/components/Information'),
  loading: loading
})

class App extends Component {
  
  componentDidMount() {
    // 做于预渲染
    AsyncInformation.preload()
  }

  render() {
    return (
        <HashRouter>
           <div className='container'>
                 <Switch>
                     <Route path="/information" component={ AsyncInformation } />
                 </Switch>
            </div>
       </HashRouter>
    )
  }
}


export default App