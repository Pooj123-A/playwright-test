
import { test, expect } from "@playwright/experimental-ct-react";
import App1119 from "./App1119.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1119 />);
  await expect(component).toContainText("Learn React");
});
