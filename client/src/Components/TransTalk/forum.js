// ChatComponent.js
import React, { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useAuth0 } from '@auth0/auth0-react';

const apiKey = '39d3dbf9-c390-4b85-8e6a-348c964fb5ef';
const projectID = 'a6e75ccf-49fd-4b19-9dfc-f9203225a86a';

const ChatComponent = () => {
  const { user } = useAuth0();

  useEffect(() => {
    const fetchChatEngineUser = async () => {
      try {
        const response = await fetch(`https://api.chatengine.io/users/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Private-Key': apiKey,
          },
          body: JSON.stringify({
            username: user.email,
            secret: user.sub,
          }),
        });

        if (!response.ok) {
          console.error('Failed to create ChatEngine user:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating ChatEngine user:', error);
      }
    };

    fetchChatEngineUser();
  }, [user]);

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={user.email}
      userSecret={user.sub}
    />
  );
};

export default ChatComponent;
