import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import Resume from './js/resume'
import Nav from './js/Nav'
import Dashboard from './js/dashBoard'
import Msg from './js/msg'
import App from './App';

import './index.css';



// ReactDOM.render(
//   (
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       {/* 当url为 "/" 想渲染的组件为Dashboard */}
//       <IndexRoute component={Dashboard}/>
//       <Route path="resume" component={Resume} />
//       <Route path="nav" component={Nav} >
//         <Route path="/message/:id" component={Msg} />
//         {/* 跳转/nav/message/:id 到 /message/:id */}
//         <Redirect from="message/:id" to="/message/:id" />
//       </Route>
//     </Route>
//   </Router>
//   ),
//   document.getElementById('root')
// );

//jsx方式路由配置
const routeConfig = [
  { path: '/',
    component: App,
    IndexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'resume', component: Resume },
      { path: 'nav', 
        component: Nav,
        childRoutes: [
          { path: 'message/:id', component: Msg },
          { path: 'message/:id', 
            onEnter: function (nextState,replaceState) {
              replaceState(null, '/message/' + nextState.params.id)
            }
          }
        ]
      }
    ]

  }
]

ReactDOM.render((
  <Router history={browserHistory} routes={routeConfig}></Router>
),
  document.getElementById('root')
)

