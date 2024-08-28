
import { test, expect } from "@playwright/experimental-ct-react";
import App1561 from "./App1561.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1561 />);
  await expect(component).toContainText("Learn React");
});
