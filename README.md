
![ai_ponybot_small_size](https://github.com/user-attachments/assets/43f8077b-dd00-4539-9528-519e3ed12086)


# AI Ponybot Extension for micro:bit  

This MakeCode extension provides a set of programmable blocks for controlling the **AI Ponybot**, a micro:bit-based smart robot developed by **boundaryX**.  

---

## 🚀 Features 
- Control up to 4 DC motors and 8 servo motors via PCA9685  
- Easy directional control using Mecanum wheel or basic movement commands
- Read line tracking sensor values (left & right)  
- Measure distance using ultrasonic sensor  
- Read RGB and brightness values from TCS34725 color sensor  
- Display text, numbers, and shapes on 128x64 OLED screen  
- Detect color and compare RGB values using advanced logic  

---

## 🧩 Blocks Overview 

### 🔧 Motor Control 
 - runMotor, stopMotor, stopAllMotors : DC motor control
 - runMecanum, runNormal : directional movement control
 - servo : set servo angle

### 📏 Sensor Input
 - readLineSensor, checkTwoLineState, checkSingleLineSensor : line sensor input
 - ping — distance measurement (cm, inch, µs)
 - getRed, getGreen, getBlue, getLight : read RGB and brightness
 - isColorAdvanced, isColorInRange : color detection logic

### 🖥 OLED Display
 - display, clear, invert : display control
 - showString, showNumber, printString, printNumber : text & number output
 - pixel, horizontalLine, verticalLine, rectangle : draw pixels & shapes

---

## 🧪 Basic Usage Example
```ts
aiPonybot.servo(aiPonybot.Servo.Servo1, 90)
aiPonybot.runMotor(aiPonybot.Motor.Motor1, aiPonybot.Direction.Clockwise, 150)
aiPonybot.stopMotor(aiPonybot.Motor.Motor1)

let dist = aiPonybot.ping(aiPonybot.PingUnit.Centimeters)
basic.showNumber(dist)

aiPonybot.display(true)
aiPonybot.showString("Hello!", 0, 0)
```

---

## 📦 Installation

In MakeCode editor, click **Extensions** → search for:  
https://github.com/boundary-x/ai_ponybot_basic

---

## 🖼 Example Blocks
![block_example](https://github.com/user-attachments/assets/f5e1ab2a-4f05-4769-8c8b-b8e0e3a078e8)

---

## License
  - MIT License
  (c) 2025 boundaryX
  - This extension partially uses code from xinabox/pxt-OD01, which is licensed under the MIT License.

--- 

## 💡 Developed By
- boundaryX – Future-focused EdTech company providing hardware + AI education kits
- Website: https://boundaryx.io
- product webpage : https://boundaryx.io/shop/?idx=26
- E-mail : hi@boundaryx.io

