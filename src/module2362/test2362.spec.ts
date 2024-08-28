
import { test, expect } from "@playwright/experimental-ct-react";
import App2362 from "./App2362.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2362 />);
  await expect(component).toContainText("Learn React");
});
