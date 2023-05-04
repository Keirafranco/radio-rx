radio.setTransmitPower(1)
radio.setGroup(111)
basic.forever(function () {
    radio.sendString("Hola ")
})
