
import { test, expect } from "@playwright/experimental-ct-react";
import App1427 from "./App1427.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1427 />);
  await expect(component).toContainText("Learn React");
});
