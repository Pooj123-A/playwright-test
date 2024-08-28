
import { test, expect } from "@playwright/experimental-ct-react";
import App999 from "./App999.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App999 />);
  await expect(component).toContainText("Learn React");
});
