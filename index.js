import fs from 'fs'
import core from '@actions/core'
import github from '@actions/github'
import yaml from 'yaml'

try {
  const time = (new Date()).toTimeString()
  const config = yaml.parse('_config.yaml')
  const payload = JSON.stringify({
    icon: config.icon,
    name: config.name ?? github.context.payload.repository.description,
    description: config.description ?? github.context.payload.repository.description,
    url: config.url ?? github.context.payload.repository.homepage + '/api',
    type: 'https://apis.do/' + (config.type ?? 'api'),
    endpoints: config.endpoints ?? {
      api: config.url ?? github.context.payload.repository.homepage + '/api',
    },
    site: (config.url ?? github.context.payload.repository.homepage),
    login: (config.url ?? github.context.payload.repository.homepage) + '/login',
    signup: (config.url ?? github.context.payload.repository.homepage) + '/signup',
    subscribe: (config.url ?? github.context.payload.repository.homepage) + '/subscribe',
    repo: github.context.payload.repository.url,
    ...config.apiMetadata,
  }, null, 2)
  fs.writeFileSync('api.json', payload)
  console.log(`The generated api.json: ${payload}`)
} catch (error) {
  core.setFailed(error.message)
}
