
import { test, expect } from "@playwright/experimental-ct-react";
import App129 from "./App129.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App129 />);
  await expect(component).toContainText("Learn React");
});
