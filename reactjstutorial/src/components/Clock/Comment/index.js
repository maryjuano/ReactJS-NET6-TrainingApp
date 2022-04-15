const sampleComment = {
    author: {
      avatarUrl: 'https://facebook.com',
      name: 'Rex',
    },
    text: 'Hello World',
    date: 'Tue Apr 12 2022 23:41:57'
  }
  
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
    )
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar {...props} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
    )
  }
  
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo {...props} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }