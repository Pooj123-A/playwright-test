
import { test, expect } from "@playwright/experimental-ct-react";
import App930 from "./App930.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App930 />);
  await expect(component).toContainText("Learn React");
});
