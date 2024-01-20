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
  k.add([k.text("level-1")]);
});

k.scene("gameover", () => {});

k.go("menu");
