/* ORIGINAL */

/*
var div = React.DOM.div
var MyTitle = require('./MyTitle.js')

var MyTitleFactory = React.createFactory(MyTitle)

var First = (
  div({style: {color: 'red'}},
    MyTitleFactory({title: 'Props are the best', color: 'rebeccapurple'}),
    MyTitleFactory({title: 'Props are everywhere', color: 'mediumaquamarine'}),
    MyTitleFactory({title: 'Props for president!', color: 'peru'})
  )
)

ReactDOM.render(First, document.getElementById('app'))
*/

const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const { Router, Route, hashHistory } = require('react-router')

/* stateless component */
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
  )

ReactDOM.render(<App />, document.getElementById('app'))
