
import { test, expect } from "@playwright/experimental-ct-react";
import App2762 from "./App2762.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2762 />);
  await expect(component).toContainText("Learn React");
});
