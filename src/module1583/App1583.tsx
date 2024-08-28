
import { test, expect } from "@playwright/experimental-ct-react";
import App1583 from "./App1583.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1583 />);
  await expect(component).toContainText("Learn React");
});
