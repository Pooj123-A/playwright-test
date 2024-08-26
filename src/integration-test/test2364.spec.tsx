
import { test, expect } from "@playwright/experimental-ct-react";
import App2364 from "../example/App2364.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2364 />);
  await expect(component).toContainText("Learn React");
});
