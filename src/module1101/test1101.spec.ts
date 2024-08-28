
import { test, expect } from "@playwright/experimental-ct-react";
import App1101 from "./App1101.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1101 />);
  await expect(component).toContainText("Learn React");
});
