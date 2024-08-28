
import { test, expect } from "@playwright/experimental-ct-react";
import App802 from "./App802.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App802 />);
  await expect(component).toContainText("Learn React");
});
