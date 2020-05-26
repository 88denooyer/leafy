# Leafy

I made this to learn more about Node.js and having fun interacting with my Nanoleaf light panels.

Once I have a decent amount of features added and things are cleaned up, I plan on making a website where you (yes you!) can control my lights from the comfort of your own home!

## Initial Steps

If you own Nanoleaf lights, feel free to follow these instructions on how to use the code to play around with your own lights!

- Follow the steps from [Nanoleaf's](https://documenter.getpostman.com/view/1559645/RW1gEcCH?version=latest#f7b37c20-37bb-48b1-93e1-13a79f9bcb34) documentation or read below here for my quick steps
- Download and install Postman here > [Postman Download](https://www.postman.com/downloads/)
- Open Postman and create a new `POST` request with the following parameters:
  - `http://192.168.X.X:16021/api/v1/new`
    - You can find your light panel IP address by logging into your Internet router and finding your device on the list of connected devices on your network
  - Before sending the `POST` request, press and hold the Nanoleaf power button for 5-7 seconds
  - Click `Send` and you should receive a response with a 32-character auth token
  - Save that token somewhere safe to copy and paste later
- You're now authenticated to your Nanoleaf device!

## Getting Started with the Code

- Clone it or do whatever you what to get it on your system
- Open the file `stems.js` and add your 32-character token to the constant `YOUR_KEY`
  - If your code doesn't run later down the line, just hard-code your token into the `path` of each function's `options` object. I changed this quickly before publishing so that I wasn't publishing my actual token and didn't test it
  - Change `hostname` in each function's `options` object to your device's IP address
