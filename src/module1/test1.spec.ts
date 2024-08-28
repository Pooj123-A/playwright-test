
import { test, expect } from "@playwright/experimental-ct-react";
import App1 from "./App1.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1 />);
  await expect(component).toContainText("Learn React");
});
