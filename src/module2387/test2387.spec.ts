
import { test, expect } from "@playwright/experimental-ct-react";
import App2387 from "./App2387.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2387 />);
  await expect(component).toContainText("Learn React");
});
