
import { test, expect } from "@playwright/experimental-ct-react";
import App470 from "../example/App470.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App470 />);
  await expect(component).toContainText("Learn React");
});
