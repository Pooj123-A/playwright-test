
import { test, expect } from "@playwright/experimental-ct-react";
import App269 from "../example/App269.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App269 />);
  await expect(component).toContainText("Learn React");
});
