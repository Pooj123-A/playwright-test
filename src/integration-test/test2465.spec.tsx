
import { test, expect } from "@playwright/experimental-ct-react";
import App2465 from "../example/App2465.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2465 />);
  await expect(component).toContainText("Learn React");
});
