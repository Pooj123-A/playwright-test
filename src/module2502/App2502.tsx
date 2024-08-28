
import { test, expect } from "@playwright/experimental-ct-react";
import App2502 from "./App2502.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2502 />);
  await expect(component).toContainText("Learn React");
});
