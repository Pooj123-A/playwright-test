
import { test, expect } from "@playwright/experimental-ct-react";
import App812 from "./App812.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App812 />);
  await expect(component).toContainText("Learn React");
});
