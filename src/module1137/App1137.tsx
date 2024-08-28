
import { test, expect } from "@playwright/experimental-ct-react";
import App1137 from "./App1137.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1137 />);
  await expect(component).toContainText("Learn React");
});
