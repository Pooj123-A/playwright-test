
import { test, expect } from "@playwright/experimental-ct-react";
import App2377 from "./App2377.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2377 />);
  await expect(component).toContainText("Learn React");
});
