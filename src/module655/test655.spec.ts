
import { test, expect } from "@playwright/experimental-ct-react";
import App655 from "./App655.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App655 />);
  await expect(component).toContainText("Learn React");
});
