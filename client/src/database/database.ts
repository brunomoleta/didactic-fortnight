import { nanoid } from 'nanoid';
import type { IsubscriptionOptions } from '../../types/static';

export const homeHero: string =
  'A simple solution to complex tasks is coming soon';

export const homeParagraph: string =
  'Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.';

export const buttonText = {
  heroHome: 'Get Started',
  sendForm: 'Submit',
};



export const subscriptionOption = [
  {
    id:nanoid(),
    type: 'starter',
    persona: "individuals",
    price: "free",
    storage: 2,
    keyFeatures:[
      "up to 2gb cloud storage",
      "up to 3 workspaces"
    ],
    text: [
      '100% encrypted communication',
      'basic document collaboration',
      'terminal integration',
      '90 days account inactivity 000',
      'Basic storage replication 000',
      "personalized ads 000"

    ],
    buttonText: "sign up, it's Free"
  },
  {
    id:nanoid(),
    type: 'business',
    price: 12.49,
    storage: 50,
    persona: "teams",
    keyFeatures:[],
    text: [
      'ai controls and insights',
      "no ads",
      'access to web app',
      '100% encrypted communication',
      'files stored forever',
      'terminal integration',
    ],
    buttonText: "start free 30-day trial"
  },
  {
    id:nanoid(),
    type: 'enterprise',
    price: "let's talk",
    storage: 400,
    persona: "scaling teams",
    keyFeatures:[],
    text: [
      'ai controls and insights',
      "no ads",
      'access to web app',
      '100% encrypted communication',
      'files stored forever',
      'terminal integration',
    ],
    buttonText: "contact sales"
  },
];

export const launchDate = new Date('2023-05-24');

export const countdown: string = `Coming ${launchDate}`;

export const timeLeftForLaunch = ['days', 'hours', 'mins', 'secs'];

export const signUpHero: string = 'Work smarter. Save time.';
export const signUpParagraph: string =
  'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.';