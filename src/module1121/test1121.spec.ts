
import { test, expect } from "@playwright/experimental-ct-react";
import App1121 from "./App1121.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1121 />);
  await expect(component).toContainText("Learn React");
});
