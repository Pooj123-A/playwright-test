
import { test, expect } from "@playwright/experimental-ct-react";
import App1557 from "./App1557.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1557 />);
  await expect(component).toContainText("Learn React");
});
