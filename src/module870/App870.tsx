
import { test, expect } from "@playwright/experimental-ct-react";
import App870 from "./App870.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App870 />);
  await expect(component).toContainText("Learn React");
});
