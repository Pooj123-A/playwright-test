
import { test, expect } from "@playwright/experimental-ct-react";
import App180 from "./App180.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App180 />);
  await expect(component).toContainText("Learn React");
});
