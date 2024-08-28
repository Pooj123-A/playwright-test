
import { test, expect } from "@playwright/experimental-ct-react";
import App1835 from "./App1835.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1835 />);
  await expect(component).toContainText("Learn React");
});
