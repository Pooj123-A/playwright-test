
import { test, expect } from "@playwright/experimental-ct-react";
import App2319 from "../example/App2319.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2319 />);
  await expect(component).toContainText("Learn React");
});
