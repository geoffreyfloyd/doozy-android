# Running React Native Project on Windows

## Fix npm global react-native-cli:
var proc;
if (process.platform === "win32") {
    proc = spawn('cmd', ['/c', cmd].concat(args), {stdio: 'inherit'});
}
else {
    proc = spawn(cmd, args, {stdio: 'inherit'});
}

## Replace package.json values:
  scripts.start: "node node_modules/react-native/packager/packager.js"
  dependencies.react-native: "react-native": "../react-native"

## Start Android Emulator & Redirect Android Device to Localhost on Port 8081 (Development Server)
  adb reverse tcp:8081 tcp:8081

## Deploy Payload to Emulator
  cd android; ./gradlew installDebug

## Start Development Server (react-native start doesn't work on Windows)
  npm start | react-native start
