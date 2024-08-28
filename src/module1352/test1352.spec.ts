
import { test, expect } from "@playwright/experimental-ct-react";
import App1352 from "./App1352.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1352 />);
  await expect(component).toContainText("Learn React");
});
