
import { test, expect } from "@playwright/experimental-ct-react";
import App2565 from "./App2565.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2565 />);
  await expect(component).toContainText("Learn React");
});
