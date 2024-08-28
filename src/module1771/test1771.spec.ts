
import { test, expect } from "@playwright/experimental-ct-react";
import App1771 from "./App1771.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1771 />);
  await expect(component).toContainText("Learn React");
});
