
import { test, expect } from "@playwright/experimental-ct-react";
import App2622 from "./App2622.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2622 />);
  await expect(component).toContainText("Learn React");
});
