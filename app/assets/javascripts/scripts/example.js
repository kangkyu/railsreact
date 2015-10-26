  // tutorial8.js
  var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
  ];

  // tutorial4.js
  var Comment = React.createClass({
    render: function() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  });

  // tutorial2.js
  var CommentList = React.createClass({
    render: function() {
      var commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
  });

  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          Hello, world! I am a CommentForm.
        </div>
      );
    }
  });

  // tutorial1.js
  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.data} />
          <CommentForm />
        </div>
      );
    }
  });

  ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
  );
