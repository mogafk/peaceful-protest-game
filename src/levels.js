export default {
    level1: {
        id: 'level1',
        worldWidth: 1200,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningThreshold: 100,
        scoreWin: 1000,
        cops: {
            count: [
                [4, 0],
                [50, 5],
                // [60, 3],
                [90, 7],
                [100, 8]
            ],
            speed: {
                value: 50,
                running: 1.7
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        press: {
            count: [
                [4, 0],
                [50, 1],
                [60, 7],
                [100, 8]
            ],
            speed: {
                value: 50
            },
            fov: {
                distance: 150,
                angle: 100
            },
            score: 0,
            duration: 5 // s
        },
        protesters: {
            count: {
                start: 2,
                max: 100,
                add: 12
            },
            speed: {
                value: 60
            },
            mood: 0.5,
            moodUp: 0.001,
            moodDown: 0.0001,
            poster: {
                drop: 0.3,
                alive: 20 // s
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                running: 1.5
            },
            radius: 120,
            stamina: 100,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        },
        swat: {
            count: 5,
            speed: {
                value: 200
            },
            frequency: 15000,
            scoreThreshold: 400
        },
        star: {
            score: 300
        }
    },
    level2: {
        id: 'level2',
        worldWidth: 800,
        worldHeight: 800,
        duration: 4 * 60, // s
        winningThreshold: 75,
        cops: {
            count: [
                [40, 1],
                [50, 2],
                [60, 3],
                [90, 4],
                [100, 5]
            ],
            speed: {
                value: 60,
                running: 1.8
            },
            fov: {
                distance: 150,
                angle: 120
            }
        },
        swat: {
            count: 5,
            speed: {
                value: 200
            },
            frequency: 5000,
            scoreThreshold: 10
        },
        press: {
            count: 5,
            speed: {
                value: 50
            },
            fov: {
                distance: 100,
                angle: 100
            },
            duration: 5
        },
        protesters: {
            count: {
                start: 20,
                max: 60,
                add: 10
            },
            max: 60,
            speed: {
                value: 60
            },
            mood: 0.25,
            moodUp: 0.002,
            moodDown: 0.0001,
            poster: {
                drop: 0.12,
                alive: 20 // s
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                running: 1.5
            },
            radius: 120,
            stamina: 200,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        }
    }
};
