import type { AiTool } from '../types/ai_tool'

export const aiTools: AiTool[] = [
  {
    whatsTheName: 'GitHub Copilot',
    urlLink: 'https://github.com/features/copilot',
    description:
      'AI-powered code completion tool that helps developers write code faster and with fewer bugs',
    company: 'GitHub',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'ChatGPT',
    urlLink: 'https://chat.openai.com',
    description: 'Large language model that can assist with coding, writing, and problem-solving',
    company: 'OpenAI',
    howToUseType: 'Browser-based',
  },
  {
    whatsTheName: 'Devv.ai',
    urlLink: 'https://devv.ai',
    description: 'AI-powered coding assistant that helps developers write and maintain code',
    howToUseType: 'AI software engineer',
  },
]
