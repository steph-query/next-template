import getConfig from "next/config"

export const getClientConfig = () => {
  const config = getConfig()
  const { publicRuntimeConfig } = config
  return publicRuntimeConfig
}

export const getServerConfig = () => {
  const config = getConfig()
  const { serverRuntimeConfig } = config
  return serverRuntimeConfig
}
