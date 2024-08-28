
import { test, expect } from "@playwright/experimental-ct-react";
import App762 from "./App762.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App762 />);
  await expect(component).toContainText("Learn React");
});
