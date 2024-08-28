
import { test, expect } from "@playwright/experimental-ct-react";
import App873 from "./App873.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App873 />);
  await expect(component).toContainText("Learn React");
});
