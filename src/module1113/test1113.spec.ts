
import { test, expect } from "@playwright/experimental-ct-react";
import App1113 from "./App1113.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1113 />);
  await expect(component).toContainText("Learn React");
});
