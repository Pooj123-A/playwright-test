
import { test, expect } from "@playwright/experimental-ct-react";
import App1482 from "./App1482.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1482 />);
  await expect(component).toContainText("Learn React");
});
