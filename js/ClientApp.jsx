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
const MyTitle = require('./MyTitle.jsx')

/* stateless component */
const First = () => (
    <div>
      <MyTitle title='Whatever' color='rebeccapurple' />
      <MyTitle title='LOL' color='papayawhip' />
      <MyTitle title='fIVEDOG' color='peru' />
    </div>
  )

ReactDOM.render(<First />, document.getElementById('app'))
