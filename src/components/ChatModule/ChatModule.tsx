import React, { useEffect, useState } from 'react';
import { Input, Avatar, List, Space, Button, Skeleton } from 'antd';
import { SendOutlined, UserOutlined } from '@ant-design/icons';

// Realistic tracking-related messages
const generateMessages = () => [
    { id: 1, text: 'Hello! How can I assist you with tracking today?', sender: 'bot' },
    { id: 2, text: 'I’d like to track the price of gold over the past week.', sender: 'user' },
    { id: 3, text: 'Sure! The average price of gold last week was $1,850 per ounce.', sender: 'bot' },
    { id: 4, text: 'Can you provide the current price?', sender: 'user' },
    { id: 5, text: 'The current price of gold is $1,870 per ounce.', sender: 'bot' },
    { id: 6, text: 'Great. Can I set up an alert for when it drops below $1,800?', sender: 'user' },
    { id: 7, text: 'Absolutely. I’ve set an alert to notify you when gold drops below $1,800.', sender: 'bot' },
    { id: 8, text: 'Can you track fuel prices for me as well?', sender: 'user' },
    { id: 9, text: 'Yes! The current average price of fuel in your area is $3.40 per gallon.', sender: 'bot' },
    { id: 10, text: 'What about the best price in my city?', sender: 'user' },
    { id: 11, text: 'The lowest price in your city is $3.25 per gallon at QuickStop Station.', sender: 'bot' },
    { id: 12, text: 'Thanks! Also, how long will my package take to arrive?', sender: 'user' },
    { id: 13, text: 'Your package is estimated to arrive in 2 days, on January 7th.', sender: 'bot' },
    { id: 14, text: 'Can you track the delivery status for me?', sender: 'user' },
    { id: 15, text: 'Of course! The package is currently in transit and is expected to reach the sorting facility by tonight.', sender: 'bot' },
    { id: 16, text: 'That’s very helpful. Thanks!', sender: 'user' },
    { id: 17, text: 'You’re welcome! Let me know if there’s anything else I can assist with.', sender: 'bot' },
];

const ChatModule: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<{ id: number; text: string; sender: string }[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Simulate loading for 2 seconds
        const timeout = setTimeout(() => {
            setMessages(generateMessages());
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Append new user message
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, text: inputValue, sender: 'user' },
                {
                    id: prevMessages.length + 2,
                    text: 'Thank you for your message! I will get back to you shortly.',
                    sender: 'bot',
                },
            ]);
            setInputValue(''); // Clear input field
        }
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Chat Messages */}
            <div
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                }}
            >
                {loading ? (
                    // Skeleton loader
                    <div style={{ padding: '10px' }}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Skeleton key={index} avatar paragraph={{ rows: 1 }} active />
                        ))}
                    </div>
                ) : (
                    <List
                        dataSource={messages}
                        renderItem={(message) => (
                            <List.Item
                                key={message.id}
                                style={{
                                    justifyContent:
                                        message.sender === 'user' ? 'flex-end' : 'flex-start',
                                    marginBottom: '10px',
                                }}
                            >
                                <Space>
                                    {message.sender === 'bot' && (
                                        <Avatar
                                            icon={<UserOutlined />}
                                            style={{ backgroundColor: '#87d068' }}
                                        />
                                    )}
                                    <div
                                        style={{
                                            maxWidth: '70%',
                                            padding: '10px 15px',
                                            backgroundColor:
                                                message.sender === 'user' ? '#e6f7ff' : '#ffffff',
                                            borderRadius: '12px',
                                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        {message.text}
                                    </div>
                                    {message.sender === 'user' && (
                                        <Avatar
                                            icon={<UserOutlined />}
                                            style={{ backgroundColor: '#1890ff' }}
                                        />
                                    )}
                                </Space>
                            </List.Item>
                        )}
                    />
                )}
            </div>

            {/* Input Area */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    borderTop: '1px solid #f0f0f0',
                }}
            >
                <Input
                    placeholder="Type a message..."
                    style={{ flex: 1, marginRight: '10px', borderRadius: '20px' }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={handleSendMessage}
                />
                <Button
                    type="primary"
                    shape="circle"
                    icon={<SendOutlined />}
                    style={{ backgroundColor: '#1890ff' }}
                    onClick={handleSendMessage}
                />
            </div>
        </div>
    );
};

export default ChatModule;
