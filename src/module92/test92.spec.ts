
import { test, expect } from "@playwright/experimental-ct-react";
import App92 from "./App92.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App92 />);
  await expect(component).toContainText("Learn React");
});
