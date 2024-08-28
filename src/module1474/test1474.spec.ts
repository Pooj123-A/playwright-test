
import { test, expect } from "@playwright/experimental-ct-react";
import App1474 from "./App1474.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1474 />);
  await expect(component).toContainText("Learn React");
});
