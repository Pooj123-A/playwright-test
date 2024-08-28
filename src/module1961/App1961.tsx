
import { test, expect } from "@playwright/experimental-ct-react";
import App1961 from "./App1961.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1961 />);
  await expect(component).toContainText("Learn React");
});
