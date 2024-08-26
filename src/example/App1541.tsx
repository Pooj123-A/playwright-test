
import { test, expect } from "@playwright/experimental-ct-react";
import App1541 from "./App1541.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1541 />);
  await expect(component).toContainText("Learn React");
});
