
import { test, expect } from "@playwright/experimental-ct-react";
import App2625 from "../example/App2625.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2625 />);
  await expect(component).toContainText("Learn React");
});
