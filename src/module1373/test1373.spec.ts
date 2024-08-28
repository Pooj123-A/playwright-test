
import { test, expect } from "@playwright/experimental-ct-react";
import App1373 from "./App1373.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1373 />);
  await expect(component).toContainText("Learn React");
});