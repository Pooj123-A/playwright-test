
import { test, expect } from "@playwright/experimental-ct-react";
import App2530 from "../example/App2530.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2530 />);
  await expect(component).toContainText("Learn React");
});
