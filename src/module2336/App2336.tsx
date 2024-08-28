
import { test, expect } from "@playwright/experimental-ct-react";
import App2336 from "./App2336.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2336 />);
  await expect(component).toContainText("Learn React");
});
