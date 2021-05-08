import React from "react"
import "./Message.css"

function Message({ noMessages, message, timestamp, user, userImage }) {
	if (noMessages) return <div className="message">No messages...</div>

	return (
		<div className="message">
			<img src={userImage} alt="" />
			<div className="message_info">
				<h4>
					{user}
					<span className="message_timestamp">
						{new Date(timestamp?.toDate()).toUTCString()}
					</span>
				</h4>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default Message