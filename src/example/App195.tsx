
import { test, expect } from "@playwright/experimental-ct-react";
import App195 from "./App195.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App195 />);
  await expect(component).toContainText("Learn React");
});
