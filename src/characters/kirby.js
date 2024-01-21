export function makeKirby(k, posVec2) {
  return k.add([
    k.rect(100, 100),
    k.area(),
    k.body(),
    k.pos(posVec2),
    k.doubleJump(10),
    "kirby",
    {
      isInhaling: false,
      speed: 300,
      setPlayerControls() {
        k.onKeyDown((key) => {
          switch (key) {
            case "left":
              this.move(-this.speed, 0);
              break;
            case "right":
              this.move(this.speed, 0);
              break;
            default:
          }
        });

        k.onKeyPress((key) => {
          switch (key) {
            case "z":
              this.doubleJump();
              break;
            case "x":
              this.isInhaling = true;
              break;
            default:
          }
        });

        k.onKeyRelease((key) => {
          switch (key) {
            case "x":
              this.isInhaling = false;
              break;
            default:
          }
        });
      },
      setLongAttackRange() {
        this.add([
          k.area({ shape: new k.Rect(k.vec2(-150, 0), 400, 50) }),
          "kirbyAttackRange",
        ]);
      },
    },
  ]);
}
