input.onButtonPressed(Button.A, function () {
	
})
radio.setTransmitPower(1)
radio.setGroup(138)
basic.forever(function () {
    radio.sendString("Hola ")
})
