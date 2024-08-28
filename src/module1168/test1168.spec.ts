
import { test, expect } from "@playwright/experimental-ct-react";
import App1168 from "./App1168.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1168 />);
  await expect(component).toContainText("Learn React");
});
