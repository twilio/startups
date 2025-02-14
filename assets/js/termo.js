document.addEventListener("DOMContentLoaded", function() {
var myTermo = null;

function startTermo() {
  myTermo = new termo({
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
                                      text: "Twilio's Programmable Messaging API",
                                      url: 'https://www.twilio.com/docs/sms',
                                      description: 'allows you to send and receive SMS messages seamlessly.'
                                  },
                                  repository: {
                                      text: 'Twilio Sample Template for Node.js',
                                      url: 'https://github.com/twilio-labs/sample-template-nodejs',
                                      description: 'to understand how to send SMS via Twilio in a Node.js application.'
                                  }
                              },
                              // ... other features ...
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

document.addEventListener('keypress', function(event) {
  if (event.key === 't') {
      showTermo();
  }
});

startTermo();
});