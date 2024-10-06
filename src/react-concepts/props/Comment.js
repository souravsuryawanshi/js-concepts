const Avatar = (props) => {
    return (
        <div>
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name} />
        </div>
    );
}

const UserInfo = (props) => {
    return (
        <>
        <div className="UserInfo">
            <Avatar user={props.user} />
        </div>
         <div>
           {props.user.name}
        </div>
        </>
    )
}


const Comment = (props) => {
    return (
      <div className="Comment">
        <UserInfo user={props.user} />
        <div>
            {props.text}
        </div>
        <div>
            {formatDate(props.date)}
        </div>
      </div>
    )
}