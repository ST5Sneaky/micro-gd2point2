input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        player.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
function summon_spike () {
    spike = game.createSprite(5, 5)
    for (let index = 0; index < 4; index++) {
        spike.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
}
function camera_static () {
    for (let index = 0; index < 4; index++) {
        player.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        player.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    summon_spike()
})
input.onButtonPressed(Button.B, function () {
    camera_static()
})
let spike: game.LedSprite = null
let player: game.LedSprite = null
music.setBuiltInSpeakerEnabled(true)
player = game.createSprite(0, 5)
basic.forever(function () {
    music.playMelody("A F E F D G E F ", 120)
})
