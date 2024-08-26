
import { test, expect } from "@playwright/experimental-ct-react";
import App2971 from "./App2971.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2971 />);
  await expect(component).toContainText("Learn React");
});
