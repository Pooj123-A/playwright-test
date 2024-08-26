
import { test, expect } from "@playwright/experimental-ct-react";
import App389 from "../example/App389.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App389 />);
  await expect(component).toContainText("Learn React");
});
