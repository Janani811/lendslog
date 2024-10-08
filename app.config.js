export default {
  "expo": {
    "name": "lendslog",
    "slug": "lendslog",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/app-splash-screen-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#060609"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#060609"
      },
      "package": "com.sachinelavarasan.lendslog"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      "@react-native-firebase/app",
      "@react-native-firebase/messaging"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "88497f73-bfa9-437a-9a4d-7d94db601916"
      }
    }
  }
}
