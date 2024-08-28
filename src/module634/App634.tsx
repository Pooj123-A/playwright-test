
import { test, expect } from "@playwright/experimental-ct-react";
import App634 from "./App634.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App634 />);
  await expect(component).toContainText("Learn React");
});
