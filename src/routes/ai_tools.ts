import { Hono } from 'hono'
import { aiTools } from '../data/ai_tools'

const router = new Hono()

router.get('/', c => {
  return c.json(aiTools)
})

router.get('/:type', c => {
  const type = c.req.param('type')
  const filteredTools = aiTools.filter(tool => tool.howToUseType === type)

  if (filteredTools.length === 0) {
    return c.json({ error: 'No tools found for this type' }, 404)
  }

  return c.json(filteredTools)
})

export default router
