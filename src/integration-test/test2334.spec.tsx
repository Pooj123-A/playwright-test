
import { test, expect } from "@playwright/experimental-ct-react";
import App2334 from "../example/App2334.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2334 />);
  await expect(component).toContainText("Learn React");
});
