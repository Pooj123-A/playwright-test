
import { test, expect } from "@playwright/experimental-ct-react";
import App1732 from "./App1732.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1732 />);
  await expect(component).toContainText("Learn React");
});
