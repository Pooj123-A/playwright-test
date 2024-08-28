
import { test, expect } from "@playwright/experimental-ct-react";
import App2893 from "./App2893.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2893 />);
  await expect(component).toContainText("Learn React");
});
