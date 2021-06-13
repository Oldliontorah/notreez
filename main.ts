scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    controller.moveSprite(ORANGE)
    ORANGE.setImage(img`
        . . . f f f 1 f . . . . . . . . 
        . . f f f 1 1 f . . . . . . . . 
        . f f 1 f 1 f f . . . . . . . . 
        . f 1 1 f 1 1 f . . . . . . . . 
        . f 1 1 f f 1 3 3 . . . . . . . 
        . f 1 1 f . 3 3 3 3 . . . . . . 
        . f f . f f 4 4 4 f f . . . . . 
        . . f 1 1 1 4 4 f 1 1 1 . . . . 
        . . f f 1 4 2 4 f 1 1 f . . . . 
        . . . f f 4 2 4 f 1 1 1 . . . . 
        . . . . . 4 4 4 4 f f . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . . e . . e . . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ORANGE, 60, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.over(false, effects.slash)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ORANGE.vy == 0) {
        ORANGE.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    Current_level += 1
    Start_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile14`)
    for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
        tiles.setTileAt(value, assets.tile`myTile22`)
        tiles.setWallAt(value, true)
    }
})
function Start_level () {
    if (Current_level == 1) {
        tiles.setTilemap(tilemap`level2`)
        scene.setBackgroundColor(15)
        Meanie = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 f 5 5 5 . . . 
            . . . . . 5 5 5 f 5 5 5 5 5 . . 
            . . . . 5 5 5 f f 5 5 5 5 5 5 . 
            . . . 5 5 5 5 f f 5 5 5 5 5 5 5 
            . . . f 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . 5 5 5 5 5 5 5 5 f f 5 5 5 
            . . . 1 . f f f 1 f f f f 5 5 5 
            . . . . 1 f f 2 2 2 1 f 5 5 5 5 
            . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . . . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . . . 5 5 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            `, 100, 0)
    } else if (Current_level == 2) {
        tiles.setTilemap(tilemap`level5`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffff
            ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffff
            fffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffff
            ffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffff
            ffffffffffffffffffffff1f111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffffff
            ffffffffffffffffffffff1f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffff
            ffffffffffffffffffffff1f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffff
            fffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffff
            fffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffff
            fffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffff
            ffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffff
            ffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffff
            ffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffff
            fffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffff
            fffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffff
            fffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffff
            ffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffff
            ffffffffffffffffffffffffff1111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffff
            ffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffff
            fffffffffffffffffffffffffff11111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffff
            fffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111fffffffffffffffffff
            fffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111fffffffffffffffffff
            ffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffff
            ffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffff
            ffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffff
            ffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111fffffffffffffffffff
            fffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111fffffffffffffffffff
            fffffffffffffffffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111fffffffffffffffffff
            fffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111f11ffffffffffffffff
            ffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111ffffffffffffffffff
            ffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111ffffffffffffffffffffff
            ffffffffffffffffffffffffffffff111111111111111111ffffffffffffff1ffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111fffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1111111111111111111fffffffff111111fffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff11111111111111111111111111111111111fffffffffffffffffffffffffffffffffff11111111111111111111111111fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff111111111111111111111111111111111111fffffffffffffffffffffffffffffffff111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffffffffffffffffffff1111111111111111fff11ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff111111111111111111111111111111111111111ffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111ffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddfffffddddddfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffddddddfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffddddddffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffddddddfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffffdddddffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffdddddfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffffffdddddffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffffddddffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffffffffdddffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    }
    tiles.placeOnRandomTile(ORANGE, assets.tile`myTile1`)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.destroy(effects.fountain, 500)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile17`)
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (ORANGE.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let myEnemy = 0
let E2: Sprite = null
let Meanie: Sprite = null
let Current_level = 0
let projectile: Sprite = null
let ORANGE: Sprite = null
ORANGE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 4 4 4 4 f f . . . . . 
    . . . . . 4 4 4 f 1 1 1 . . . . 
    . . . . . 4 2 4 f 1 1 f . . . . 
    . . . . . 4 2 4 f 1 1 1 . . . . 
    . . . . . 4 4 4 4 f f . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . . e . . e . . . . . . 
    . . . . . . e . . e . . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ORANGE.ay = 350
controller.moveSprite(ORANGE, 100, 0)
scene.cameraFollowSprite(ORANGE)
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level1`)
Start_level()
info.setLife(3)
game.onUpdateInterval(2500, function () {
    E2 = sprites.create(img`
        5 5 5 5 . . . . . . . 5 5 5 5 5 
        5 5 5 5 . . . . . . . 5 5 5 5 5 
        5 5 5 5 . . . . . . . 5 5 5 5 5 
        5 5 5 5 f . . . . . . 5 5 5 5 5 
        . . . 1 1 1 . . . 1 1 1 5 5 5 5 
        . . . 1 f 1 f . . 1 f 1 . . . . 
        . . . 1 1 1 f . f 1 1 1 . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . f 1 f 1 f . . . . . . 
        . . . . f . 1 f 1 . f . . . . . 
        5 5 5 f . . 1 f 1 . . 5 5 5 5 5 
        5 5 5 5 . . 1 f 1 . . 5 5 5 5 5 
        5 5 5 5 . . 9 f 9 . . 5 5 5 5 5 
        5 5 5 5 . . 9 f 9 . . 5 5 5 5 5 
        5 5 5 5 . . 9 f 9 . . 5 5 5 5 5 
        `, SpriteKind.Enemy)
    E2.follow(ORANGE, 40)
    tiles.placeOnRandomTile(E2, assets.tile`myTile5`)
})
game.onUpdateInterval(1000, function () {
    myEnemy = 0
    myEnemy.x = scene.screenWidth()
    myEnemy.vx = -100
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile10`)
})
