
import { test, expect } from "@playwright/experimental-ct-react";
import App2106 from "./App2106.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2106 />);
  await expect(component).toContainText("Learn React");
});
