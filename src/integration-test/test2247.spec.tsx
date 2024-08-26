
import { test, expect } from "@playwright/experimental-ct-react";
import App2247 from "../example/App2247.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2247 />);
  await expect(component).toContainText("Learn React");
});
