
import { test, expect } from "@playwright/experimental-ct-react";
import App2192 from "../example/App2192.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2192 />);
  await expect(component).toContainText("Learn React");
});
