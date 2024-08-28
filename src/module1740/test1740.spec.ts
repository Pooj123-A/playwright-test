
import { test, expect } from "@playwright/experimental-ct-react";
import App1740 from "./App1740.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1740 />);
  await expect(component).toContainText("Learn React");
});
