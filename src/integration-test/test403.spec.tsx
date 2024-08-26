
import { test, expect } from "@playwright/experimental-ct-react";
import App403 from "../example/App403.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App403 />);
  await expect(component).toContainText("Learn React");
});
