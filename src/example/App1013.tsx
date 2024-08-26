
import { test, expect } from "@playwright/experimental-ct-react";
import App1013 from "./App1013.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1013 />);
  await expect(component).toContainText("Learn React");
});
