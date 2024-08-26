
import { test, expect } from "@playwright/experimental-ct-react";
import App2497 from "../example/App2497.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2497 />);
  await expect(component).toContainText("Learn React");
});
