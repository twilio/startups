import Termo from '@rajnandan1/termo';

let myTermo = null;

function startTermo() {
    myTermo = new Termo({
        title: "Twilio Startups Guide Console",
        prompt: 'startups@twilio:$',
        welcomeMessage: "Ahoy! Welcome to Twilio Startups Guide Console",
        commands: [
            {
                command: 'use',
                description: 'Show use-cases for startups',
                subCommands: [
                    {
                        command: 'show',
                        description: 'Show use case details',
                        action: async (terminal, args) => {
                            const features = [
                                {
                                    key: 'sms',
                                    title: 'SMS Notifications and Alerts',
                                    description: 'Keep your users informed with timely SMS notifications for events e.g. account activities, reminders, or promotions;',
                                    guide: {
                                        text: 'Twilio\'s Programmable Messaging API',
                                        url: 'https://www.twilio.com/docs/sms',
                                        description: 'allows you to send and receive SMS messages seamlessly.'
                                    },
                                    repository: {
                                        text: 'Twilio Sample Template for Node.js',
                                        url: 'https://github.com/twilio-labs/sample-template-nodejs',
                                        description: 'to understand how to send SMS via Twilio in a Node.js application.'
                                    }
                                },
                                {
                                    key: '2fa',
                                    title: 'Two-Factor Authentication (2FA)',
                                    description: 'Enhance security by implementing 2FA, sending verification codes via SMS, voice calls or email during user sign-in processes.',
                                    guide: {
                                        text: 'Twilio\'s Verify API',
                                        url: 'https://www.twilio.com/docs/verify',
                                        description: 'to streamline the addition of 2FA to your application.'
                                    },
                                    repository: {
                                        text: 'Twilio Verify Push SDK',
                                        url: 'https://github.com/twilio/twilio-verify-android',
                                        description: 'provides resources for integrating push-based verification in Android apps.'
                                    }
                                },
                                {
                                    key: 'voice',
                                    title: 'Voice Communication',
                                    description: 'Integrate voice calling features to connect with customers directly through your application, useful for customer support, sales, internal communications, or consultations.',
                                    guide: {
                                        text: 'Twilio\'s Programmable Voice API',
                                        url: 'https://www.twilio.com/docs/voice',
                                        description: 'enables you to make, receive, and monitor calls globally.'
                                    },
                                    repository: {
                                        text: 'Twilio Java Helper Library',
                                        url: 'https://github.com/twilio/twilio-java',
                                        description: 'offers examples of implementing voice functionalities in Java applications.'
                                    }
                                },
                                {
                                    key: 'video',
                                    title: 'Video Conferencing',
                                    description: 'Build video call features or custom video applications for customer support, virtual events, remote work, virtual meetings, consultations, or support sessions.',
                                    guide: {
                                        text: 'Twilio\'s Video API',
                                        url: 'https://www.twilio.com/docs/video',
                                        description: 'provides tools to integrate video calls into your application.'
                                    },
                                    repository: {
                                        text: 'Twilio Video Processors',
                                        url: 'https://github.com/twilio/twilio-video-processors-js',
                                        description: 'contains tools for applying transformations and filters to video tracks in JavaScript applications.'
                                    }
                                },
                                {
                                    key: 'chat',
                                    title: 'Chat Applications',
                                    description: 'Develop real-time chat features and enhance customer engagement, team collaboration, or in-app messaging, within your platform.',
                                    guide: {
                                        text: 'Twilio\'s Conversations API',
                                        url: 'https://www.twilio.com/docs/conversations',
                                        description: 'allows for seamless integration of chat functionalities across multiple channels.'
                                    },
                                    repository: {
                                        text: 'Twilio Webchat React App',
                                        url: 'https://github.com/twilio/twilio-webchat-react-app',
                                        description: 'demonstrates how to build a chat widget using Twilio\'s Conversations and React.'
                                    }
                                },
                                {
                                    key: 'email',
                                    title: 'Email Communication, using Twilio SendGrid',
                                    description: 'Send transactional emails, marketing campaigns, and notifications.',
                                    guide: {
                                        text: 'Twilio SendGrid',
                                        url: 'https://sendgrid.com/',
                                        description: 'for reliable email delivery.'
                                    },
                                    repository: {
                                        text: 'SendGrid Node.js Library',
                                        url: 'https://github.com/sendgrid/sendgrid-nodejs',
                                        description: '(For sending emails using Twilio SendGrid in a Node.js app).'
                                    }
                                }
                            ];

                            let use = args[0];
                            const feature = features.find(f => f.key === use);

                            if (feature) {
                                terminal.write('\r\n');
                                terminal.write(`\r\n\x1b[34m\x1b[1m${feature.title}\x1b[39m.`);
                                terminal.write(`\r\n\x1b[22m${feature.description}`);
                                terminal.write('\r\n');
                                terminal.write(`\r\n- [Setup Guide:] \x1b[3m\x1b]8;;${feature.guide.url}\x1b\\${feature.guide.text}\x1b]8;;\x1b\\\x1b[23m ${feature.guide.description}`);
                                terminal.write('\r\n');
                                terminal.write(`\r\n- [Example Repository:] \x1b[3m\x1b]8;;${feature.repository.url}\x1b\\${feature.repository.text}\x1b]8;;\x1b\\\x1b[23m ${feature.repository.description}`);
                                terminal.write('\r\n');
                            } else {
                                terminal.write('\r\nUnknown option: ' + use);
                            }
                        },
                    },
                    {
                        command: 'list',
                        description: 'List all available use-cases',
                        action: async (terminal) => {
                            let list = [
                                'sms - SMS Notifications and Alerts',
                                '2fa - Two-Factor Authentication',
                                'voice - Voice Communication',
                                'video - Video Conferencing',
                                'chat - Chat Applications',
                                'email - Email Communication, using Twilio SendGrid'
                            ];
                            list.forEach(theme => {
                                terminal.write('\r\n  ' + theme);
                            });
                        },
                    }
                ],
            }
        ]
    });
    myTermo.create();
}

function showTermo() {
    if (myTermo) {
        myTermo.show();
    }
}

document.addEventListener('keypress', function (event) {
    if (event.key === 't') {
        showTermo();
    }
});

startTermo();
