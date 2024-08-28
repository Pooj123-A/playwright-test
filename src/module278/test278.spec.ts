
import { test, expect } from "@playwright/experimental-ct-react";
import App278 from "./App278.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App278 />);
  await expect(component).toContainText("Learn React");
});
