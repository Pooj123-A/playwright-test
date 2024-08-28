
import { test, expect } from "@playwright/experimental-ct-react";
import App1928 from "./App1928.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1928 />);
  await expect(component).toContainText("Learn React");
});
