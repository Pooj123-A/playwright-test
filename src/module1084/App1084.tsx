
import { test, expect } from "@playwright/experimental-ct-react";
import App1084 from "./App1084.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1084 />);
  await expect(component).toContainText("Learn React");
});
