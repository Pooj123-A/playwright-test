
import { test, expect } from "@playwright/experimental-ct-react";
import App2680 from "./App2680.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2680 />);
  await expect(component).toContainText("Learn React");
});
