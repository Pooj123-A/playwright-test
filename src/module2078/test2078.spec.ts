
import { test, expect } from "@playwright/experimental-ct-react";
import App2078 from "./App2078.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2078 />);
  await expect(component).toContainText("Learn React");
});
