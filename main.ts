basic.forever(function () {
    if (input.lightLevel() < 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 82)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
