radio.onReceivedNumber(function (receivedNumber) {
    Obel = receivedNumber
    porovnej()
})
function porovnej () {
    if (cisloukolu == 10 && (Aster == 4 && Obel == 3)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        radio.sendNumber(99)
        for (let index = 0; index < 50; index++) {
            basic.showString("KLIC JE NA SPODNI STRANE TRUHLY")
        }
    } else if (cisloukolu == 9 && (Aster == 1 && Obel == 3)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Heart)
        faze = 0
    } else if (cisloukolu == 8 && (Aster == 4 && Obel == 9)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Target)
        faze = 0
    } else if (cisloukolu == 7 && (Aster == 4 && Obel == 9)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.House)
        faze = 0
    } else if (cisloukolu == 6 && (Aster == 3 && Obel == 5)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Rollerskate)
        faze = 0
    } else if (cisloukolu == 5 && (Aster == 5 && Obel == 7)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.TShirt)
        faze = 0
    } else if (cisloukolu == 4 && (Aster == 2 && Obel == 7)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Skull)
        faze = 0
    } else if (cisloukolu == 3 && (Aster == 7 && Obel == 3)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Umbrella)
        faze = 0
    } else if (cisloukolu == 2 && (Aster == 3 && Obel == 4)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.EighthNote)
        faze = 0
    } else if (cisloukolu == 1 && (Aster == 3 && Obel == 6)) {
        cisloukolu += 1
        radio.sendNumber(88)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.showIcon(IconNames.Giraffe)
        faze = 0
    } else {
        cisloukolu = 1
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.showIcon(IconNames.Pitchfork)
        faze = 0
    }
}
function pokyn () {
    basic.showIcon(IconNames.Pitchfork)
    basic.showIcon(IconNames.Giraffe)
    basic.showIcon(IconNames.EighthNote)
    basic.showIcon(IconNames.Umbrella)
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.TShirt)
    basic.showIcon(IconNames.Rollerskate)
    basic.showIcon(IconNames.House)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    if (faze == 0) {
        zadejcislo()
    }
})
input.onButtonPressed(Button.B, function () {
    if (faze == 5) {
    	
    } else if (faze == 0) {
        Aster = zadanecislo
        zadanecislo = 0
        faze = 1
        radio.sendNumber(cisloukolu)
        basic.showIcon(IconNames.SmallSquare)
    } else {
    	
    }
})
function zadejcislo () {
    if (zadanecislo == 9) {
        zadanecislo = 0
    } else {
        zadanecislo += 1
    }
    basic.showNumber(zadanecislo)
}
let zadanecislo = 0
let Aster = 0
let Obel = 0
let cisloukolu = 0
let faze = 0
radio.setGroup(11)
faze = 0
cisloukolu = 1
basic.showIcon(IconNames.Square)
basic.pause(2000)
basic.showIcon(IconNames.Pitchfork)
