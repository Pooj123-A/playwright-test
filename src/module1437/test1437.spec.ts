
import { test, expect } from "@playwright/experimental-ct-react";
import App1437 from "./App1437.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1437 />);
  await expect(component).toContainText("Learn React");
});
