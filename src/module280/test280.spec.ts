
import { test, expect } from "@playwright/experimental-ct-react";
import App280 from "./App280.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App280 />);
  await expect(component).toContainText("Learn React");
});
