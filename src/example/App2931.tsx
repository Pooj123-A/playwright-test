
import { test, expect } from "@playwright/experimental-ct-react";
import App2931 from "./App2931.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2931 />);
  await expect(component).toContainText("Learn React");
});
