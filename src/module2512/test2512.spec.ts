
import { test, expect } from "@playwright/experimental-ct-react";
import App2512 from "./App2512.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2512 />);
  await expect(component).toContainText("Learn React");
});
