
import { test, expect } from "@playwright/experimental-ct-react";
import App17 from "./App17.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App17 />);
  await expect(component).toContainText("Learn React");
});
