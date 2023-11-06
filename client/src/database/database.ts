import { nanoid } from 'nanoid';

export const homeHero: string =
  'A simple solution to complex tasks is coming soon';

export const homeParagraph: string =
  'Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.';

export const buttonText = {
  heroHome: 'Get Started',
  subscriptionOption: '30 day free trial',
  sendForm: 'Submit',
};



export const subscriptionOption = [
  {
    id:nanoid(),
    type: 'starter',
    price: 0.00,
    storage: 2,
    numberUsers: 3,
    text: [
      'basic document collaboration',
      'no ads',
      'access to web app',
      '100% encrypted communication',
      '90 days account inactivity',
      'terminal integration',
    ],
  },
  {
    id:nanoid(),
    type: 'pro',
    price: 9.99,
    storage: 50,
    numberUsers: 10,
    text: [
      'ai controls and insights',
      'access to web app',
      '100% encrypted communication',
      'files stored forever',
      'terminal integration',
    ],
  },
  {
    id:nanoid(),
    type: 'pro',
    price: 24.99,
    storage: 400,
    numberUsers: 40,
    text: [
      'ai controls and insights',
      'access to web app',
      '100% encrypted communication',
      'files stored forever',
      'terminal integration',
    ],
  },
];

export const launchDate = new Date('2023-05-24');

export const countdown: string = `Coming ${launchDate}`;

export const timeLeftForLaunch = ['days', 'hours', 'mins', 'secs'];

export const signUpHero: string = 'Work smarter. Save time.';
export const signUpParagraph: string =
  'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.';