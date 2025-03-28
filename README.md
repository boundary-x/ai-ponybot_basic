
![ai ponybot](https://github.com/user-attachments/assets/d611232a-5f69-4559-8332-26371055343f)

# AI Ponybot Extension for micro:bit  
마이크로비트를 위한 AI 포니봇 확장

This MakeCode extension provides a set of programmable blocks for controlling the **AI Ponybot**, a micro:bit-based smart robot developed by **boundaryX**.  
이 MakeCode 확장은 **boundaryX**에서 개발한 마이크로비트 기반 스마트 로봇인 **AI 포니봇**을 제어하기 위한 블록을 제공합니다.

---

## 🚀 Features / 주요 기능

- Control up to 4 DC motors and 8 servo motors via PCA9685  
  PCA9685를 이용해 최대 4개의 DC 모터와 8개의 서보 모터 제어  
- Easy directional control using Mecanum wheel or basic movement commands
  메카넘 휠 또는 기본 방향 블록을 통한 간편한 이동 제어 
- Read line tracking sensor values (left & right)  
  라인 트레이싱 센서(좌/우) 값 읽기  
- Measure distance using ultrasonic sensor  
  초음파 센서를 이용한 거리 측정  
- Read RGB and brightness values from TCS34725 color sensor  
  색상 센서(TCS34725)의 RGB 및 밝기 값 읽기  
- Display text, numbers, and shapes on 128x64 OLED screen  
  128x64 OLED 디스플레이에 텍스트, 숫자, 도형 출력  
- Detect color and compare RGB values using advanced logic  
  고급 색상 판별 로직으로 특정 색상 감지 가능

---

## 🧩 Blocks Overview / 블록 기능 요약

### 🔧 Motor Control / 모터 제어
 - runMotor, stopMotor, stopAllMotors : DC motor control / DC 모터 제어
 - runMecanum, runNormal : directional movement control / 방향 이동 제어
 - servo : set servo angle / 서보모터 각도 설정

### 📏 Sensor Input / 센서 입력
 - readLineSensor, checkTwoLineState, checkSingleLineSensor : line sensor input / 라인 센서 입력
 - ping — distance measurement (cm, inch, µs) : 거리 측정 (cm, inch, 마이크로초)
 - getRed, getGreen, getBlue, getLight : read RGB and brightness / RGB 및 밝기 값 읽기
 - isColorAdvanced, isColorInRange : color detection logic / 색상 감지 로직

### 🖥 OLED Display / OLED 디스플레이
 - display, clear, invert : display control / 디스플레이 제어
 - showString, showNumber, printString, printNumber : text & number output / 텍스트 및 숫자 출력
 - pixel, horizontalLine, verticalLine, rectangle : draw pixels & shapes / 픽셀 및 도형 그리기

---

## 🧪 Basic Usage Example / 기본 사용 예시
```ts
aiPonybot.servo(aiPonybot.Servo.Servo1, 90)
aiPonybot.runMotor(aiPonybot.Motor.Motor1, aiPonybot.Direction.Clockwise, 150)
aiPonybot.stopMotor(aiPonybot.Motor.Motor1)

let dist = aiPonybot.ping(aiPonybot.PingUnit.Centimeters)
basic.showNumber(dist)

aiPonybot.display(true)
aiPonybot.showString("Hello!", 0, 0)

## 📦 Installation / 설치 방법

In MakeCode editor, click **Extensions** → search for:  
MakeCode 에디터에서 **Extensions** 클릭 → 아래 주소 입력  
https://github.com/boundary-x/ai_ponybot_basic
```

---

## 🖼 Example Blocks / 블록 예시
![block_example](https://github.com/user-attachments/assets/f5e1ab2a-4f05-4769-8c8b-b8e0e3a078e8)

---

## License / 라이선스
  - MIT License
  (c) 2025 boundaryX

--- 

## 💡 Developed By / 개발자 정보
- boundaryX – Future-focused EdTech company providing hardware + AI education kits
  차세대 융합 기술 교육 콘텐츠와 교구를 개발하는 에듀테크 스타트업 boundaryX
- Website: https://boundaryx.io
- E-mail : hi@boundaryx.io
