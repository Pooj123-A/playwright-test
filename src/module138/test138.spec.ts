
import { test, expect } from "@playwright/experimental-ct-react";
import App138 from "./App138.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App138 />);
  await expect(component).toContainText("Learn React");
});
