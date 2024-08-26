
import { test, expect } from "@playwright/experimental-ct-react";
import App2789 from "../example/App2789.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2789 />);
  await expect(component).toContainText("Learn React");
});
