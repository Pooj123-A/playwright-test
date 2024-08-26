
import { test, expect } from "@playwright/experimental-ct-react";
import App2696 from "../example/App2696.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2696 />);
  await expect(component).toContainText("Learn React");
});
