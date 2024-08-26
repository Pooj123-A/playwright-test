
import { test, expect } from "@playwright/experimental-ct-react";
import App34 from "../example/App34.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App34 />);
  await expect(component).toContainText("Learn React");
});
