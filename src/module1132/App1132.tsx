
import { test, expect } from "@playwright/experimental-ct-react";
import App1132 from "./App1132.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1132 />);
  await expect(component).toContainText("Learn React");
});
