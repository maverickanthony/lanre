import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";

export const APPS = [
    {
       subdomain: '',
       app: Homepage,
       main: true
    },
    {
        subdomain: 'app',
        app: Dashboard,
        main: false
    }
]