
import { test, expect } from "@playwright/experimental-ct-react";
import App201 from "./App201.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App201 />);
  await expect(component).toContainText("Learn React");
});
