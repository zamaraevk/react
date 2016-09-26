// <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>

const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className="container">
        <h1>hi</h1>
        <pre><code>{JSON.stringify(this.props.params, null, 4)}</code></pre>
      </div>
      )
  }
}

module.exports = Details
