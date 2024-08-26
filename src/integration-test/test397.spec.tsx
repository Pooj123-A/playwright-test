
import { test, expect } from "@playwright/experimental-ct-react";
import App397 from "../example/App397.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App397 />);
  await expect(component).toContainText("Learn React");
});
