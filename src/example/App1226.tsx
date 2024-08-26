
import { test, expect } from "@playwright/experimental-ct-react";
import App1226 from "./App1226.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1226 />);
  await expect(component).toContainText("Learn React");
});
