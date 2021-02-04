import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
// import Resume from './js/resume'
import Society from './components/society'
// import Nav from './js/Nav'
import School from './components/school'
// import Dashboard from './js/dashBoard'
import Index from './components'
import Msg from './js/msg'
import VideoView from './js/Nav/Video'
import App from './App';
import React16 from './js/React16'

import './index.css';

// // 方式1：
// ReactDOM.render(
//   (
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       {/* 当url为 "/" 想渲染的组件为Dashboard */}
//       <IndexRoute component={Dashboard}/>
//       <Route path="resume" component={Resume} />
//       <Route path="nav" component={Nav} >
//         <Route path="/message/:id" component={VideoView} />
//         {/* 跳转/nav/message/:id 到 /message/:id */}
//         <Redirect from="message/:id" to="/message/:id" />
//       </Route>
//     </Route>
//   </Router>
//   ),
//   document.getElementById('root')
// );

//方式2：jsx方式路由配置
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Index }, 
    childRoutes: [
      { path: 'society', component: Society },
      { path: 'school', 
        component: School,
        childRoutes: [
          { path: '/message/:id', component: VideoView },
          { path: 'message/:id', 
            // onEnter: function (nextState, replaceState) {//进入路由时
            //   replaceState(null, '/message/' + nextState.params.id)
            // }
            // 当url为/nav/message/2 时跳转到  /message/2
            onEnter: ({ params }, replace) => replace(`/message/${params.id}`)
          }
        ]
      },
      { path: 'react16', component: React16 }
    ]
  },{
    path: 'society',
    component: Society
  },{
    path: 'school',
    component: School
  }
]

ReactDOM.render((
  <Router history={browserHistory} routes={routeConfig}></Router>
),
  document.getElementById('root')
)

