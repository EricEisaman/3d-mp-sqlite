# Your Art
____
____

## **How to Play**

Toggle music mute with **M** key. Play next song with **P** key. 

![UI](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fui.png?1532840103277)

Toggle the **Message and Avatar UI** with the **EQUALS** key. You must enter the proper **Message_KEY** to send a message. **Tab** your way through the UI elements. Once you have finished typing your message or selecting a new avatar, hit **ENTER** to submit.


Pressing the **F** key or clicking the **VR Headset Icon** will take you to fullscreen mode.  Note: in fullscreen mode only movement keys are enabled.  Press the **ESC** key to exit fullscreen mode. 

<a href="https://your-art.glitch.me/" no-opener no-referer>**LIVE DEMO**</a>

____

## **Remixing Instructions**



Set the **MESSAGE_KEY** in .env. Change the scene's environment preset in the **index.html.**  Create your own **.glb** models with <a href="http://pixologic.com/sculptris/" no-opener no-referer>**Sculptris**</a> and <a href="https://www.blender.org/download/" no-opener no-referer>**Blender**</a>.

In the **client-config.js** set the values for:
  - avatar array of face image URLs ( use .png with transparent background )
  - avatar color used for button background 
  - the text color for the messages
  - sound file URL for playerJoined
  - sound file URL for playerLeft
  - BGM songs
  - custom key bindings/behaviors

**Screenshot**
![App Screen2](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fapp-screen.png?1532839987907)

**Environment Settings**  ( index.html )
![Environment](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fenvironment.png?1532871874928)

![Environement Options](https://github.com/feiss/aframe-environment-component/raw/master/assets/aframeenvironment.gif?raw=true)

**Sculptris for Easy Creation of Basic Model**
![Sculptris](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fsculptris.png?1532961951688)

**Blender Bones Animation**
![Blender](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fblender.png?1532961633005)

**Blender Export as .glb**  
( plugin for Blender v2.79 <a href="https://github.com/KhronosGroup/glTF-Blender-Exporter" no-opener no-referer>here</a>. Note: Blender v2.80 will have built-in plugin )
![.glb export](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fexport.png?1532962417545)