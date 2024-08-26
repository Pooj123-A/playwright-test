
import { test, expect } from "@playwright/experimental-ct-react";
import App2435 from "./App2435.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2435 />);
  await expect(component).toContainText("Learn React");
});
