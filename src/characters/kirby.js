export function makeKirby(k, posVec2) {
  return k.add([
    k.rect(100, 100),
    k.area(),
    k.body(),
    k.pos(posVec2),
    k.doubleJump(6),
    {
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
            case "space":
              this.doubleJump();
              break;
            default:
          }
        });
      },
    },
  ]);
}
