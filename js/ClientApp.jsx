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

/* stateless component */
const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo???</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All</button>
    </div>
  </div>
  )

ReactDOM.render(<App />, document.getElementById('app'))
