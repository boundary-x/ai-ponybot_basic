// test.ts

// 초기화 및 기본 동작 테스트
aiPonybot.servo(aiPonybot.Servo.Servo1, 90)
aiPonybot.runMotor(aiPonybot.Motor.Motor1, aiPonybot.Direction.Clockwise, 100)
aiPonybot.stopMotor(aiPonybot.Motor.Motor1)
aiPonybot.stopAllMotors()

// 메카넘 휠 테스트
aiPonybot.runMecanum(aiPonybot.Mecanum.Forward, 150)
basic.pause(1000)
aiPonybot.runMecanum(aiPonybot.Mecanum.Stop, 0)

// 일반 방향 제어
aiPonybot.runNormal(aiPonybot.DirectionControl.Clockwise, 150)

// 라인 센서 테스트
let leftLine = aiPonybot.readLineSensor(aiPonybot.LineSensorChannel.Left)
let rightLine = aiPonybot.readLineSensor(aiPonybot.LineSensorChannel.Right)
basic.showNumber(leftLine + rightLine)

// 초음파 센서 테스트
let dist = aiPonybot.ping(aiPonybot.PingUnit.Centimeters)
basic.showNumber(dist)

// 색상 센서 테스트
let red = aiPonybot.getRed()
let green = aiPonybot.getGreen()
let blue = aiPonybot.getBlue()
let light = aiPonybot.getLight()
basic.showNumber(red + green + blue + light)

// OLED 테스트
aiPonybot.display(true)
aiPonybot.clear()
aiPonybot.showString("Hello!", 0, 0)
aiPonybot.showNumber(123, 0, 1)
aiPonybot.horizontalLine(0, 3, 50)
aiPonybot.verticalLine(64, 0, 30)
aiPonybot.rectangle(10, 10, 50, 30)
