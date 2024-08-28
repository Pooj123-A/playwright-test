
import { test, expect } from "@playwright/experimental-ct-react";
import App2290 from "./App2290.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2290 />);
  await expect(component).toContainText("Learn React");
});
