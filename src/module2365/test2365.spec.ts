
import { test, expect } from "@playwright/experimental-ct-react";
import App2365 from "./App2365.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2365 />);
  await expect(component).toContainText("Learn React");
});
