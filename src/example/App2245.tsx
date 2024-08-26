
import { test, expect } from "@playwright/experimental-ct-react";
import App2245 from "./App2245.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2245 />);
  await expect(component).toContainText("Learn React");
});
