
import { test, expect } from "@playwright/experimental-ct-react";
import App1282 from "./App1282.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1282 />);
  await expect(component).toContainText("Learn React");
});
