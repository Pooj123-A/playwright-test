
import { test, expect } from "@playwright/experimental-ct-react";
import App2733 from "./App2733.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2733 />);
  await expect(component).toContainText("Learn React");
});
