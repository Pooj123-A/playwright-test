
import { test, expect } from "@playwright/experimental-ct-react";
import App468 from "../example/App468.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App468 />);
  await expect(component).toContainText("Learn React");
});
