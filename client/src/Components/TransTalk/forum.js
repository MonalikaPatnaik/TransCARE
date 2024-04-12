// ChatComponent.js
import React, { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useAuth0 } from '@auth0/auth0-react';


const api_key = process.env.REACT_APP_KEY;
const project_id = process.env.REACT_APP_ID;

const ChatComponent = () => {
  const { user } = useAuth0();

  useEffect(() => {
    const fetchChatEngineUser = async () => {
      try {
        // Create or fetch the ChatEngine user
        const userResponse = await fetch(`https://api.chatengine.io/users/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Private-Key': api_key,
          },
          body: JSON.stringify({
            username: user.nickname,
            secret: user.sub,
          }),
        });

        if (!userResponse.ok) {
          console.error('Failed to create ChatEngine user:', userResponse.statusText);
          return;
        }

        const chatID = process.env.REACT_APP_CHAT_ID;

        // Add the user to the chat
        const addMemberResponse = await fetch(`https://api.chatengine.io/chats/${chatID}/people/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Project-ID': project_id,
            'User-Name': 'Monalika Patnaik',
            'User-Secret': 12345,
          },
          body: JSON.stringify({
            username: user.nickname,
          }),
        });

        if (!addMemberResponse.ok) {
          console.error('Failed to add user to chat:', addMemberResponse.statusText);
        }
      } catch (error) {
        console.error('Error creating ChatEngine user or adding to chat:', error);
      }
    };

    fetchChatEngineUser();
  }, [user]);

  return (
    <ChatEngine
      height="100vh"
      projectID={project_id} // Corrected from PROJECT_ID to projectID
      userName={user.nickname}
      userSecret={user.sub}
    />
  );
};

export default ChatComponent;
