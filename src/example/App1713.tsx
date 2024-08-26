
import { test, expect } from "@playwright/experimental-ct-react";
import App1713 from "./App1713.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1713 />);
  await expect(component).toContainText("Learn React");
});
