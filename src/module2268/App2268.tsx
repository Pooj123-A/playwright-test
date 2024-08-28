
import { test, expect } from "@playwright/experimental-ct-react";
import App2268 from "./App2268.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2268 />);
  await expect(component).toContainText("Learn React");
});
