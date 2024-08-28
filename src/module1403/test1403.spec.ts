
import { test, expect } from "@playwright/experimental-ct-react";
import App1403 from "./App1403.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1403 />);
  await expect(component).toContainText("Learn React");
});
