
import { test, expect } from "@playwright/experimental-ct-react";
import App1980 from "./App1980.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1980 />);
  await expect(component).toContainText("Learn React");
});
