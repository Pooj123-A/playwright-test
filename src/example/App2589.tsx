
import { test, expect } from "@playwright/experimental-ct-react";
import App2589 from "./App2589.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2589 />);
  await expect(component).toContainText("Learn React");
});
