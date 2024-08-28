
import { test, expect } from "@playwright/experimental-ct-react";
import App2424 from "./App2424.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2424 />);
  await expect(component).toContainText("Learn React");
});
