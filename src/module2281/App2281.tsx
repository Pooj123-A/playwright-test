
import { test, expect } from "@playwright/experimental-ct-react";
import App2281 from "./App2281.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2281 />);
  await expect(component).toContainText("Learn React");
});
