def on_button_pressed_a():
    for index in range(3):
        player.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    for index2 in range(3):
        player.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def summon_spike():
    global spike
    spike = game.create_sprite(5, -5)
    for index3 in range(4):
        spike.change(LedSpriteProperty.X, 1)
        basic.pause(100)

def on_button_pressed_b():
    camera_static()
input.on_button_pressed(Button.B, on_button_pressed_b)

def camera_static():
    for index4 in range(4):
        player.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    basic.pause(500)
    for index5 in range(4):
        player.change(LedSpriteProperty.X, -1)
        basic.pause(100)
spike: game.LedSprite = None
player: game.LedSprite = None
music.set_built_in_speaker_enabled(True)
player = game.create_sprite(0, 5)

def on_forever():
    music.play_melody("A F E F D G E F ", 120)
basic.forever(on_forever)
