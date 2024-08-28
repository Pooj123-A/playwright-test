
import { test, expect } from "@playwright/experimental-ct-react";
import App1234 from "./App1234.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1234 />);
  await expect(component).toContainText("Learn React");
});
