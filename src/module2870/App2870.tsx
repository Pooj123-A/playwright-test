
import { test, expect } from "@playwright/experimental-ct-react";
import App2870 from "./App2870.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2870 />);
  await expect(component).toContainText("Learn React");
});
