import { APPS } from "./constants"


export const getApp = () => {
    const subdomain = getSubDomain(window.location.hostname)

    const main = APPS.find((app) => app.main)
    if (!main) throw new Error('must have main app')

    if (subdomain === '') return main.app
     

    const app = APPS.find((app) => subdomain === app.subdomain)
    if (!app) return main.app
    return app.app
}

const getSubDomain = (location) => {
    const locationParts = location.split('.')

    let sliceFill = -2

    const isLocalHost = locationParts.slice(-1)[0] === 'localhost'
    if (isLocalHost) sliceFill = -1

    return locationParts.slice(0, sliceFill).join("")

}