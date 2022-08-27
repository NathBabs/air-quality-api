const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const tags = require('./tags')
const quality = require('./quality')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...quality,
}
