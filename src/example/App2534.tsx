
import { test, expect } from "@playwright/experimental-ct-react";
import App2534 from "./App2534.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2534 />);
  await expect(component).toContainText("Learn React");
});
