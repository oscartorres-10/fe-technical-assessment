import { Workflow } from "./types"

export const localMockData: Workflow[] = [
  {
    type: 'Workflow',
    name: {
      emoji: '🔄',
      text: 'AI Article Writer Workflow',
    },
    tags: [{ text: '2 tags', color: '#FF5733' }],
    last_updated: '2023-10-01',
  },
  {
    type: 'Agent',
    name: {
      emoji: '🤖',
      text: 'Subproject Article Writer Agent',
    },
    tags: [{ text: 'Test', color: '#33FF57' }],
    last_updated: '2023-09-30',
  },
  {
    type: 'Workflow',
    name: {
      emoji: '💡',
      text: 'Creative Content Idea Generator Workflow',
    },
    tags: [],
    last_updated: '2023-09-29',
  },
  {
    type: 'Workflow',
    name: {
      emoji: '📈',
      text: 'SEO Content Optimizer Workflow',
    },
    tags: [{ text: 'Content Creation', color: '#3357FF' }],
    last_updated: '2023-09-28',
  },
  {
    type: 'Agent',
    name: {
      emoji: '📱',
      text: 'Social Media Content Manager Agent',
    },
    tags: [{ text: 'Content Creation', color: '#FF33A1' }],
    last_updated: '2023-09-27',
  },
  {
    type: 'Workflow',
    name: {
      emoji: '📧',
      text: 'Email Marketing Campaign Builder Workflow',
    },
    tags: [{ text: 'Marketing', color: '#33FFF5' }],
    last_updated: '2023-09-26',
  },
  {
    type: 'Agent',
    name: {
      emoji: '📊',
      text: 'Sales Lead Generator Agent',
    },
    tags: [{ text: 'Sales', color: '#F5FF33' }],
    last_updated: '2023-09-25',
  },
  {
    type: 'Workflow',
    name: {
      emoji: '📝',
      text: 'Customer Feedback Sentiment Analyzer Workflow',
    },
    tags: [{ text: 'Analytics', color: '#FF5733' }],
    last_updated: '2023-09-24',
  },
  {
    type: 'Agent',
    name: {
      emoji: '🤖',
      text: 'AI Chatbot Assistant Agent',
    },
    tags: [{ text: 'AI', color: '#33FF57' }],
    last_updated: '2023-09-23',
  },
  {
    type: 'Workflow',
    name: {
      emoji: '📅',
      text: 'Project Management Planner Workflow',
    },
    tags: [{ text: 'Management', color: '#3357FF' }],
    last_updated: '2023-09-22',
  },
  {
    type: 'Agent',
    name: {
      emoji: '💰',
      text: 'Personal Budget Tracker Agent',
    },
    tags: [{ text: 'Finance', color: '#FF33A1' }],
    last_updated: '2023-09-21',
  },
];
