
import { test, expect } from "@playwright/experimental-ct-react";
import App1206 from "./App1206.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1206 />);
  await expect(component).toContainText("Learn React");
});
