
import { test, expect } from "@playwright/experimental-ct-react";
import App1093 from "./App1093.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1093 />);
  await expect(component).toContainText("Learn React");
});
