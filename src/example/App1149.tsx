
import { test, expect } from "@playwright/experimental-ct-react";
import App1149 from "./App1149.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1149 />);
  await expect(component).toContainText("Learn React");
});
