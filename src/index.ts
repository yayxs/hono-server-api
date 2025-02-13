import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { aiTools } from './data/ai_tools'

const app = new Hono()

// 添加 CORS 中间件
app.use('*', cors())

// 欢迎页面
app.get('/', c => {
  return c.json({
    message: 'Welcome to AI Tools API',
    endpoints: {
      getAllTools: '/api/ai-tools',
      getToolsByType: '/api/ai-tools/:type',
    },
  })
})

// 获取所有工具
app.get('/api/ai-tools', c => {
  return c.json(aiTools)
})

// 按类型获取工具
app.get('/api/ai-tools/:type', c => {
  const type = c.req.param('type')
  const filteredTools = aiTools.filter(tool => tool.howToUseType === type)

  if (filteredTools.length === 0) {
    return c.json({ error: 'No tools found for this type' }, 404)
  }

  return c.json(filteredTools)
})

export default app
