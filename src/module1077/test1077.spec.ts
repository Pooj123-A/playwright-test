
import { test, expect } from "@playwright/experimental-ct-react";
import App1077 from "./App1077.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1077 />);
  await expect(component).toContainText("Learn React");
});
