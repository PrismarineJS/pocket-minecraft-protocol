// Minimum supported version (< will be kicked)
const MIN_VERSION = 422
// Currently supported verson
const CURRENT_VERSION = 422

const defaultOptions = {
  // https://minecraft.gamepedia.com/Protocol_version#Bedrock_Edition_2
  version: CURRENT_VERSION
}

const Versions = {
  '1.16.200': 422
}

module.exports = { defaultOptions, MIN_VERSION, CURRENT_VERSION, Versions }