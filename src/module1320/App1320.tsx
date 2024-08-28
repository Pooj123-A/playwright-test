
import { test, expect } from "@playwright/experimental-ct-react";
import App1320 from "./App1320.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1320 />);
  await expect(component).toContainText("Learn React");
});
