
import { test, expect } from "@playwright/experimental-ct-react";
import App2673 from "./App2673.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2673 />);
  await expect(component).toContainText("Learn React");
});
