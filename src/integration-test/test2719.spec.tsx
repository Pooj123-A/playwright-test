
import { test, expect } from "@playwright/experimental-ct-react";
import App2719 from "../example/App2719.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2719 />);
  await expect(component).toContainText("Learn React");
});
