
import { test, expect } from "@playwright/experimental-ct-react";
import App2302 from "./App2302.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2302 />);
  await expect(component).toContainText("Learn React");
});
