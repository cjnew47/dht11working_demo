input.onButtonPressed(Button.A, function () {
    basic.showString("TEMP: ")
    basic.showNumber(Environment_IoT.temperature(DHT11Type.DHT11_temperature_F, DigitalPin.P0))
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Humi: ")
    basic.showNumber(Environment_IoT.temperature(DHT11Type.DHT11_humidity, DigitalPin.P0))
})
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Temp", input.temperature())
    serial.writeValue("Sound level", input.soundLevel())
    basic.pause(3000)
})
