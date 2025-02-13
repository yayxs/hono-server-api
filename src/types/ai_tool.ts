export interface AiTool {
  logoComponent?: string
  whatsTheName: string
  urlLink: string
  description: string
  company?: string
  howToUseType:
    | 'Browser-based'
    | 'Extension'
    | 'Editor'
    | 'Terminal'
    | 'AI software engineer'
    | 'Other'
    | 'Git'
}
