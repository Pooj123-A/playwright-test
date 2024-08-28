
import { test, expect } from "@playwright/experimental-ct-react";
import App2626 from "./App2626.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2626 />);
  await expect(component).toContainText("Learn React");
});
