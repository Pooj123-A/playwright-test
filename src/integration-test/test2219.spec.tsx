
import { test, expect } from "@playwright/experimental-ct-react";
import App2219 from "../example/App2219.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2219 />);
  await expect(component).toContainText("Learn React");
});
