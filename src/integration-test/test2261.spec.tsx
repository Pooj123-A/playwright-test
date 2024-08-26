
import { test, expect } from "@playwright/experimental-ct-react";
import App2261 from "../example/App2261.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2261 />);
  await expect(component).toContainText("Learn React");
});
