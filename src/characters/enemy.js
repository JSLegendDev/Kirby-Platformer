export function makeEnemy(k, posVec2) {
  return k.add([
    k.rect(100, 100),
    k.color(0, 0, 0),
    k.pos(posVec2),
    k.area(),
    k.body(),
    {
      speed: 300,
      makeVunerableTo(entity) {
        this.onCollide("kirbyAttackRange", () => {
          const updateController = k.onUpdate(() => {
            if (entity.isInhaling) this.moveTo(entity.pos, this.speed);
          });

          this.onCollide("kirby", () => {
            updateController.cancel();
            k.destroy(this);
          });
        });
      },
    },
  ]);
}
