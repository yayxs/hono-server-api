console.log(`hono run==`)

import { Hono } from 'hono'
import axios from 'axios'

import { homeTxt } from './config'
const app = new Hono()

// 处理一下路由

app.get(`/stars/:owner/:repo`, async (c) => {
  // 解析参数
  const { owner, repo } = c.req.param()
  console.log(`owner`, owner)
  console.log(`repo`, repo)
  try {
    const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}`)
    console.log(`res`, res.data.stargazers_count)
    return c.json({ stars: res.data.stargazers_count })
  } catch (error) {
    return c.json({ error: 'error' })
  }
})

app.get('/', (c) => {
  return c.text(`${homeTxt}`)
})

export default app
