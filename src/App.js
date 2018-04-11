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

const AsyncAboutForeign = Loadable({
  loader: () => import('@/components/Information/About/Foreign'),
  loading: loading
})

const AsyncAboutOperationInfo = Loadable({
  loader: () => import('@/components/Information/About/OperationInfo'),
  loading: loading
})

const AsyncAboutRisk = Loadable({
  loader: () => import('@/components/Information/About/Risk'),
  loading: loading
})

const AsyncAboutContract = Loadable({
  loader: () => import('@/components/Information/About/Contract'),
  loading: loading
})

const AsyncAboutLegal = Loadable({
  loader: () => import('@/components/Information/About/Legal'),
  loading: loading
})

const AsyncAboutNetClass = Loadable({
  loader: () => import('@/components/Information/About/NetClass'),
  loading: loading
})

class App extends Component {
  
  componentDidMount() {
    // 做于预渲染
    AsyncInformation.preload()
    AsyncNoticeNum.preload()
    AsyncBiddingNum.preload()
    AsyncAboutIndex.preload()
    AsyncAboutForeign.preload()
    AsyncAboutOperationInfo.preload()
    AsyncAboutRisk.preload()
    AsyncAboutContract.preload()
    AsyncAboutLegal.preload()
    AsyncAboutNetClass.preload()
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
                     <Route path="/about/foreign" component={ AsyncAboutForeign } />
                     <Route path="/about/operationinfo" component={ AsyncAboutOperationInfo } />
                     <Route path="/about/risk" component={ AsyncAboutRisk } />
                     <Route path="/about/contract" component={ AsyncAboutContract } />
                     <Route path="/about/legal" component={ AsyncAboutLegal } />
                     <Route path="/about/netclass" component={ AsyncAboutNetClass } />
                 </Switch>
            </div>
       </HashRouter>
    )
  }
}


export default App