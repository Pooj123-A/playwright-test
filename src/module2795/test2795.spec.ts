
import { test, expect } from "@playwright/experimental-ct-react";
import App2795 from "./App2795.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2795 />);
  await expect(component).toContainText("Learn React");
});
