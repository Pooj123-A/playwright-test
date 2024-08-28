
import { test, expect } from "@playwright/experimental-ct-react";
import App1592 from "./App1592.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1592 />);
  await expect(component).toContainText("Learn React");
});
