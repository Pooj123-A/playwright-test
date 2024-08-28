
import { test, expect } from "@playwright/experimental-ct-react";
import App1146 from "./App1146.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1146 />);
  await expect(component).toContainText("Learn React");
});