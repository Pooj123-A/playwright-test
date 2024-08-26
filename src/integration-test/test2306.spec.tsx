
import { test, expect } from "@playwright/experimental-ct-react";
import App2306 from "../example/App2306.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2306 />);
  await expect(component).toContainText("Learn React");
});
