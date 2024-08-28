
import { test, expect } from "@playwright/experimental-ct-react";
import App2552 from "./App2552.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2552 />);
  await expect(component).toContainText("Learn React");
});
