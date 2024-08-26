
import { test, expect } from "@playwright/experimental-ct-react";
import App2065 from "./App2065.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2065 />);
  await expect(component).toContainText("Learn React");
});
