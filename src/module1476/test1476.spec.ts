
import { test, expect } from "@playwright/experimental-ct-react";
import App1476 from "./App1476.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1476 />);
  await expect(component).toContainText("Learn React");
});
