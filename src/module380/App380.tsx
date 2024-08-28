
import { test, expect } from "@playwright/experimental-ct-react";
import App380 from "./App380.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App380 />);
  await expect(component).toContainText("Learn React");
});
