
import { test, expect } from "@playwright/experimental-ct-react";
import App2633 from "../example/App2633.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2633 />);
  await expect(component).toContainText("Learn React");
});
