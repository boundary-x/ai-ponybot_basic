basic.showString("Test Start")

// 서보모터 테스트 (예: S1번, 90도)
AIponybot.servo(AIponybot.Servos.S1, 90)
basic.pause(500)

// 모터 1번 정회전 테스트
AIponybot.MotorRun(AIponybot.Motors.M1, AIponybot.Dir.CW, 100)
basic.pause(500)
AIponybot.motorStop(AIponybot.Motors.M1)

// 메카넘 주행 테스트
AIponybot.MecanumRun(AIponybot.Mecanum.ff, 150)
basic.pause(500)
AIponybot.motorStopAll()

// 일반 주행 테스트 (앞으로)
AIponybot.NomalRun(AIponybot.DirControll.foward, 100)
basic.pause(500)
AIponybot.motorStopAll()

// 라인 센서 테스트
let leftLine = AIponybot.readLineSensor(AIponybot.lineSensorChannel.reft)
basic.showNumber(leftLine)
basic.pause(300)

// 거리 센서 테스트 (cm)
let dist = AIponybot.ping(AIponybot.PingUnit.Centimeters)
basic.showNumber(dist)
basic.pause(300)

// 색상 센서 테스트
let r = AIponybot.getRed()
let g = AIponybot.getGreen()
let b = AIponybot.getBlue()
basic.showNumber(r)
basic.showNumber(g)
basic.showNumber(b)

// OLED 출력 테스트
AIponybot.display(true)
AIponybot.clear()
AIponybot.showString("Hello!", 0, 0)
basic.pause(1000)
AIponybot.display(false)

basic.showString("Done")
// 테스트는 여기로 이동합니다; 이 패키지가 확장으로 사용될 때 컴파일되지 않을 것 입니다.
