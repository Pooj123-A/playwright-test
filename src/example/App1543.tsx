
import { test, expect } from "@playwright/experimental-ct-react";
import App1543 from "./App1543.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1543 />);
  await expect(component).toContainText("Learn React");
});
