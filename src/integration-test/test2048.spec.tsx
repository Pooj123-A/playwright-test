
import { test, expect } from "@playwright/experimental-ct-react";
import App2048 from "../example/App2048.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2048 />);
  await expect(component).toContainText("Learn React");
});
