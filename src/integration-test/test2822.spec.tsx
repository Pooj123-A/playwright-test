
import { test, expect } from "@playwright/experimental-ct-react";
import App2822 from "../example/App2822.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2822 />);
  await expect(component).toContainText("Learn React");
});
