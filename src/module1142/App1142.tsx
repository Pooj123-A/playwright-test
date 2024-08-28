
import { test, expect } from "@playwright/experimental-ct-react";
import App1142 from "./App1142.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1142 />);
  await expect(component).toContainText("Learn React");
});
