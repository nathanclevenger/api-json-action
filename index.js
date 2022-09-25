import fs from 'fs'
import core from '@actions/core'
import github from '@actions/github'
import yaml from 'yaml'

try {
  // const nameToGreet = core.getInput('who-to-greet')
  // console.log(`Hello ${nameToGreet}!`)
  const time = (new Date()).toTimeString()
  // core.setOutput("time", time)
  // Get the JSON webhook payload for the event that triggered the workflow
  const config = yaml.parse('_config.yaml')
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
  fs.writeFileSync('api.json', JSON.stringify({
    icon: '入',
    name: 'lambda.do',
    description: 'Instant Globally-distributed Lambda Functions as APIs',
    url: 'https://lambda.to/api',
    type: 'https://apis.do/lambda',
    endpoints: {
      listSources: 'https://lambda.to/sources',
    },
    site: 'https://lambda.to',
    login: 'https://lambda.to/login',
    signup: 'https://lambda.to/signup',
    subscribe: 'https://lambda.to/subscribe',
    repo: 'https://github.com/nathanclevenger/lambda.to',
    config,
  }, null, 2))
  console.log(`The event payload: ${payload}`)
} catch (error) {
  core.setFailed(error.message)
}
