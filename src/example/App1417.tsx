
import { test, expect } from "@playwright/experimental-ct-react";
import App1417 from "./App1417.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1417 />);
  await expect(component).toContainText("Learn React");
});
