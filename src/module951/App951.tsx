
import { test, expect } from "@playwright/experimental-ct-react";
import App951 from "./App951.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App951 />);
  await expect(component).toContainText("Learn React");
});
