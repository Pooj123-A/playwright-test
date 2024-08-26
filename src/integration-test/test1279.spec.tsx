
import { test, expect } from "@playwright/experimental-ct-react";
import App1279 from "../example/App1279.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1279 />);
  await expect(component).toContainText("Learn React");
});
