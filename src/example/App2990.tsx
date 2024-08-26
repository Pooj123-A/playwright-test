
import { test, expect } from "@playwright/experimental-ct-react";
import App2990 from "./App2990.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2990 />);
  await expect(component).toContainText("Learn React");
});
