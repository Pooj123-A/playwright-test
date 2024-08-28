
import { test, expect } from "@playwright/experimental-ct-react";
import App845 from "./App845.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App845 />);
  await expect(component).toContainText("Learn React");
});
