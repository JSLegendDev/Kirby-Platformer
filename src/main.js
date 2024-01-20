import { makeKirby } from "./characters/kirby.js";
import { k } from "./kaboomCtx.js";

k.scene("menu", () => {
  k.onClick(() => {
    k.go("level-1");
  });

  k.onKeyPress("enter", () => {
    k.go("level-1");
  });
});

k.scene("level-1", () => {
  k.setGravity(2000);
  k.add([k.text("level-1")]);
  const kirby = makeKirby(k, k.vec2(100, 100));
  kirby.setPlayerControls();

  const platform = k.add([
    k.rect(1000, 200),
    k.pos(0, 600),
    k.area(),
    k.body({ isStatic: true }),
  ]);
});

k.scene("gameover", () => {});

k.go("menu");
