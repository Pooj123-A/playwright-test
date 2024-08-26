
import { test, expect } from "@playwright/experimental-ct-react";
import App334 from "../example/App334.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App334 />);
  await expect(component).toContainText("Learn React");
});
