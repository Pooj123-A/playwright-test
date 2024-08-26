
import { test, expect } from "@playwright/experimental-ct-react";
import App2423 from "../example/App2423.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2423 />);
  await expect(component).toContainText("Learn React");
});
