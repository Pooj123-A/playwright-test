
import { test, expect } from "@playwright/experimental-ct-react";
import App2385 from "../example/App2385.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2385 />);
  await expect(component).toContainText("Learn React");
});
