
import { test, expect } from "@playwright/experimental-ct-react";
import App1346 from "./App1346.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1346 />);
  await expect(component).toContainText("Learn React");
});
