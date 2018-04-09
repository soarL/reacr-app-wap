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

const AsyncNoticeNum = Loadable({
  loader: () => import('@/components/Information/Notice/num'),
  loading: loading
})

const AsyncBiddingNum = Loadable({
  loader: () => import('@/components/Information/Bidding/num'),
  loading: loading
})

const AsyncAboutIndex = Loadable({
  loader: () => import('@/components/Information/About/Index/index'),
  loading: loading
})

class App extends Component {
  
  componentDidMount() {
    // 做于预渲染
    AsyncInformation.preload()
    AsyncNoticeNum.preload()
  }

  render() {
    return (
        <HashRouter>
           <div className='container'>
                 <Switch>
                     <Route path="/information" component={ AsyncInformation } />
                     <Route path="/notice/page/:id" component={ AsyncNoticeNum } />
                     <Route path="/bidding/page/:id" component={ AsyncBiddingNum } />
                     <Route path="/about/index" component={ AsyncAboutIndex } />
                 </Switch>
            </div>
       </HashRouter>
    )
  }
}


export default App