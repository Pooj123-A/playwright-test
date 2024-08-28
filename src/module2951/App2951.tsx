
import { test, expect } from "@playwright/experimental-ct-react";
import App2951 from "./App2951.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2951 />);
  await expect(component).toContainText("Learn React");
});
