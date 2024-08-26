
import { test, expect } from "@playwright/experimental-ct-react";
import App151 from "../example/App151.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App151 />);
  await expect(component).toContainText("Learn React");
});
