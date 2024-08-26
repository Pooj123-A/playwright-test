
import { test, expect } from "@playwright/experimental-ct-react";
import App530 from "../example/App530.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App530 />);
  await expect(component).toContainText("Learn React");
});
