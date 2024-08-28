
import { test, expect } from "@playwright/experimental-ct-react";
import App1525 from "./App1525.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1525 />);
  await expect(component).toContainText("Learn React");
});
